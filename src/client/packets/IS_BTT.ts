import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_BTT extends Packet {
  public type = PacketType.ISP_BTT;
  public size = 104;

  public uniqueId!: number;
  public clickId!: number;
  public inst!: number;
  public typeIn!: number;
  public text!: string;

  public deserialize(buffer: Buffer): IS_BTT {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.uniqueId = reader.readUInt8();
    this.clickId = reader.readUInt8();
    this.inst = reader.readUInt8();
    this.typeIn = reader.readUInt8();
    reader.skip(1);

    this.text = reader.readString(96);

    return this;
  }
}
