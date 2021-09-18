import { Packet } from '../../structures/Packet';
import { ModeIdentifier } from '../../types/ModeIdentifier';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_CIM extends Packet {
  public type = PacketType.ISP_CIM;
  public size = 8;

  public uniqueId!: number;
  public mode!: ModeIdentifier;
  public subMode!: number;
  public selType!: number;

  public deserialize(buffer: Buffer): IS_CIM {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.uniqueId = reader.readUInt8();
    this.mode = reader.readUInt8();
    this.subMode = reader.readUInt8();
    this.selType = reader.readUInt8();
    reader.skip(1);

    return this;
  }
}
