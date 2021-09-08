import { Socket } from 'net';
import { InSimException } from '../../structures/InSimException';
import { BaseSocket } from '../../structures/BaseSocket';
import { Client } from '../Client';
import { PacketType } from '../..';

export class TcpSocket extends BaseSocket {
  private _socket = new Socket();
  private connectionRetries = 0;

  constructor(private client: Client) {
    super();

    this._socket.on('connect', () => this.handleConnection());
    this._socket.on('close', () => this.handleDisconnection());
    this._socket.on('error', (error) => this.handleError(error));

    this._socket.on('data', (data) => this.handleIncomingData(data));
  }

  public connect(port: number, host: string): void {
    this._socket.connect(port, host);
  }

  public disconnect(): void {
    this._socket.end();
  }

  public send(data: Buffer): void {
    this.bytesSent += data.byteLength;
    this._socket.write(data);
  }

  private handleConnection(): void {
    this.client.emit('connect');
    this.send(this.client.initPacket.serialize());
  }

  private handleDisconnection(): void {
    this.client.emit('disconnect');
    this._reconnect();
  }

  private handleError(error: Error): void {
    this.client.emit('error', error);
    this._reconnect();
  }

  private handleIncomingData(buffer: Buffer): void {
    this.bytesReceived += buffer.byteLength;

    let offset = 0;
    let bufferBytes = buffer.byteLength;

    while (bufferBytes > 0 && bufferBytes >= buffer.readUInt8(offset)) {
      const size = buffer.readUInt8(offset);

      if (size % 4 > 0) {
        throw new InSimException('Corrupt packet');
      }

      const bytes = buffer.slice(offset, offset + size);
      const packetId = bytes.readUInt8(1);

      // Successfully connected
      if (packetId === PacketType.ISP_VER) {
        this.connectionRetries = 0;
      }

      this.client.bindingManager.handlePacket(packetId, bytes);

      offset += size;
      bufferBytes -= bytes.byteLength;
    }
  }

  private _reconnect(): void {
    const { connection } = this.client.clientOptions;
    const { host, port, autoReconnect } = connection;

    if (autoReconnect) {
      if (this.connectionRetries > 3) {
        throw new InSimException('Failed to reconnect after 3 retries');
      } else {
        setTimeout(
          () => this.connect(port, host),
          2000 * this.connectionRetries,
        );
      }
    }

    this.connectionRetries++;
  }
}
