import pino, { Logger, LoggerOptions } from 'pino';
import EventEmitter from 'events';

import { TcpSocket } from './sockets/TcpSocket';
import { PacketType } from '../types/PacketType';
import { Packet, ISerializable } from '../structures/Packet';
import { BindingManager } from './BindingManager';
import { EventsManager } from './EventsManager';
import { IS_ISI, IS_TINY } from './packets';

export class Client extends EventEmitter {
  public tcpSocket = new TcpSocket(this);

  public eventsManager!: EventsManager;
  public bindingManager!: BindingManager;

  public logger!: Logger;

  constructor(public clientOptions: ClientOptions) {
    super();

    this.logger = pino(clientOptions.logger);

    this.eventsManager = new EventsManager(this);
    this.bindingManager = new BindingManager(this);

    this.hook();
  }

  public connect(): void {
    const { host, port } = this.clientOptions.connection;
    this.tcpSocket.connect(port, host);
  }

  public disconnect(): void {
    this.tcpSocket.disconnect();
  }

  public send(data: Buffer | ISerializable): void {
    if ('serialize' in data) data = data.serialize();
    this.tcpSocket.send(data);
  }

  public bind<T = Packet>(
    packetId: PacketType,
    callback: (data: T) => void,
  ): void {
    this.bindingManager.bind(packetId, callback);
  }

  public unbind(packetId: PacketType): void {
    this.bindingManager.unbind(packetId);
  }

  public get initPacket(): IS_ISI {
    return new IS_ISI(this.clientOptions.insimOptions);
  }

  private hook(): void {
    this.bind<IS_TINY>(PacketType.ISP_TINY, () => {
      this.logger.debug(`sending ping`);
      this.send(new IS_TINY());
    });
  }
}

export interface ClientOptions {
  connection: ClientConnectionOptions;
  logger?: ClientLoggerOptions;
  insimOptions: Partial<ClientInSimOptions>;
}

export interface ClientConnectionOptions {
  host: string;
  port: number;
  autoReconnect?: boolean;
}

export interface ClientInSimOptions {
  name: string;
  prefix: string;
  version: number;
  password: string;
  flags: number;
  interval: number;
  udpPort: number;
}

export type ClientLoggerOptions = LoggerOptions;
