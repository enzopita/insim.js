import { PacketType } from '../types/PacketType';
import { Constants } from './Constants';
import { InSimException } from './InSimException';

export abstract class Packet {
  public type = PacketType.ISP_NONE;
  public size = 0;
  public requestId = Constants.packetRequestId;

  public serialize(): Buffer {
    throw new InSimException(`${PacketType[this.type]}#serialize() is not implemented.`);
  }

  // eslint-disable-next-line
  public deserialize(data: Buffer): unknown {
    throw new InSimException(`${PacketType[this.type]}#deserialize() is not implemented.`);
  }
}

export type PacketGenericProperties = keyof Packet;
export type PacketOptions<T> = Omit<T, PacketGenericProperties>;
export type PacketOptionalOptions<T, V extends keyof T> = Omit<T, V | PacketGenericProperties> | Partial<Pick<T, V>>;

export interface PacketConstructor {
  new (): Packet;
}
