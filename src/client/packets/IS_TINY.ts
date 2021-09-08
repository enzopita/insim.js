import { TinyType } from '../../types/TinyType';
import { PacketType } from '../../types/PacketType';
import {
  Packet,
  ISerializable,
  IDeserializable,
  IPacketOptions,
} from '../../structures/Packet';
import { PacketWriter } from '../../utils/packets/PacketWriter';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_TINY extends Packet implements ISerializable, IDeserializable {
  public type = PacketType.ISP_TINY;
  public size = 4;

  public subType!: TinyType;

  constructor(options?: IsTinyOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.writeUInt8(this.subType);

    return writer.buffer;
  }

  public deserialize(buffer: Buffer): IS_TINY {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.subType = reader.readUInt8();

    return this;
  }
}

export type IsTinyOptions = IPacketOptions<IS_TINY>;
