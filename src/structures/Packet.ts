import { Defaults } from './Constants';
import { PacketType } from '../types/PacketType';
import { PacketWriter } from '../utils/packets/PacketWriter';

export abstract class Packet {
  public type = PacketType.ISP_NONE;
  public size = 0;
  public requestId = Defaults.PACKET_REQUEST_ID;
}

export interface IPacketConstructor {
  new (): Packet;
}

export interface ISerializable {
  serialize(): Buffer;
  serialize(writer: PacketWriter): void;
}

export interface IDeserializable {
  deserialize(buffer: Buffer): Packet;
}

export type IGenericPacketProperties =
  | 'type'
  | 'size'
  | 'serialize'
  | 'deserialize'
  | 'requestId';

export type IPacketOptions<T> =
  | Omit<T, IGenericPacketProperties>
  | Partial<Pick<Packet, 'requestId'>>;

export type IPacketOptionalOptions<T, V extends keyof T> =
  | Omit<T, IGenericPacketProperties | V>
  | Partial<Pick<T, V>>;
