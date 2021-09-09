import pino, { Logger, LoggerOptions } from 'pino';

import { TcpSocket } from './sockets/TcpSocket';
import { InSimException } from '../structures/InSimException';
import { Packet } from '../structures/Packet';
import { Constants } from '../structures/Constants';
import { PacketHandler } from './PacketHandler';
import { PacketType } from '../types/PacketType';
import { IS_TINY, IS_VER, IS_ISI } from './packets';
import { TypedEventEmitter } from '../utils/TypedEventEmitter';
import type { InSimFlags } from '../types/InSimFlags';
import { Util } from '../utils/Util';

export interface InSimOptions {
  name?: string;
  prefix?: string;
  version?: number;
  password?: string;
  interval?: number;
  flags?: InSimFlags;
  udpPort?: number;

  host: string;
  port: number;

  useInternalHooks?: boolean;
  autoReconnect?: boolean;
  loggerOptions?: LoggerOptions;
}

export interface InSimEvents {
  error: (error: Error) => void;
  connect: () => void;
  disconnect: () => void;
  ready: () => void;
}

export class InSim extends TypedEventEmitter<InSimEvents> {
  private tcpSocket = new TcpSocket(this);
  private udpSocket = null;

  public logger!: Logger;
  public packetHandler!: PacketHandler;

  constructor(private options: InSimOptions) {
    super();

    options.useInternalHooks = options.useInternalHooks ?? true;

    if (!options.host) options.host = '127.0.0.1';
    if (!options.port) options.port = 29999;

    if (!options.name) options.name = Constants.insimName;
    if (!options.prefix) options.prefix = Constants.insimPrefix;
    if (!options.version) options.version = Constants.insimVersion;
    if (!options.password) options.password = '';
    if (!options.udpPort) options.udpPort = 0;

    this.logger = pino(options.loggerOptions ?? { enabled: false });
    this.packetHandler = new PacketHandler(this);

    if (options.useInternalHooks) this.applyInternalHooks();
    this.handleSocketEvents();
  }

  public connect(): void {
    this.tcpSocket.connect(this.options.port, this.options.host);
  }

  public disconnect(): void {
    this.tcpSocket.disconnect();
  }

  public reconnect(): void {
    this.disconnect();
    this.connect();
  }

  public bind<T = Packet>(packetType: PacketType, callback: (data: T) => void): void {
    this.packetHandler.add(packetType, callback);
  }

  public unbind<T = Packet>(packetType: PacketType, callback: (data: T) => void): void {
    this.packetHandler.remove(packetType, callback);
  }

  public send(packet: Packet): void {
    if (!(packet instanceof Packet)) throw new InSimException('InSim#send(): not a valid packet.');
    this.tcpSocket.send(packet.serialize());
  }

  public sendMessage(message: string, args: string[] = []): void {
    this.send(Util.createMessagePacket(message, args));
  }

  private get initPacket(): IS_ISI {
    return new IS_ISI(this.options);
  }

  private applyInternalHooks(): void {
    this.bind<IS_VER>(PacketType.ISP_VER, () => this.emit('ready'));
    this.bind<IS_TINY>(PacketType.ISP_TINY, () => {
      this.send(new IS_TINY());
    });

    this.tcpSocket.on('connect', () => this.send(this.initPacket));
  }

  private handleSocketEvents(): void {
    this.tcpSocket.on('connect', () => this.emit('connect'));
    this.tcpSocket.on('disconnect', () => this.emit('disconnect'));
  }
}
