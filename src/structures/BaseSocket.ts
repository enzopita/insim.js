import { InSimException } from './InSimException';

export abstract class BaseSocket {
  public bytesReceived = 0;
  public bytesSent = 0;

  public connect(port: number, host: string): void {
    throw new InSimException('eae cara, implementa aqui');
  }

  public disconnect(): void {
    throw new InSimException('eae cara, implementa aqui');
  }

  public send(data: Buffer): void {
    throw new InSimException('eae cara, implementa aqui');
  }
}
