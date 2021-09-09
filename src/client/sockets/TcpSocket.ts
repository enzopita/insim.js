import { Socket } from 'net';

import { InSimException } from '../../structures/InSimException';
import { BaseSocket } from '../../structures/BaseSocket';
import type { InSim } from '../InSim';
export class TcpSocket extends BaseSocket {
  private _socket = new Socket();

  constructor(private insim: InSim) {
    super();

    this._socket.on('connect', () => this.emit('connect'));
    this._socket.on('close', () => this.emit('disconnect'));
    this._socket.on('data', (data) => this.handleIncomingData(data));
  }

  public connect(port: number, host: string): void {
    this._socket.connect(port, host);
  }

  public disconnect(): void {
    this._socket.destroy();
  }

  public send(data: Buffer): void {
    this.bytesSent += data.byteLength;
    this._socket.write(data);
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
      this.insim.packetHandler.handlePacket(bytes);

      offset += size;
      bufferBytes -= bytes.byteLength;
    }
  }
}
