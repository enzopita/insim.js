import { TypedEventEmitter } from '../utils/TypedEventEmitter';

export interface BaseSocketEvents {
  connect: () => void;
  disconnect: () => void;
}

export abstract class BaseSocket extends TypedEventEmitter<BaseSocketEvents> {
  public bytesReceived = 0;
  public bytesSent = 0;

  // eslint-disable-next-line
  public connect(port: number, host: string): void {
    throw new Error('BaseSocket#connect(): unimplemented function.');
  }

  public disconnect(): void {
    throw new Error('BaseSocket#disconnect(): unimplemented function.');
  }

  // eslint-disable-next-line
  public send(buffer: Buffer): void {
    throw new Error('BaseSocket#send(): unimplemented function.');
  }
}
