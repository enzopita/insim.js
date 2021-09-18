import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_CRS extends Packet {
  public type = PacketType.ISP_CRS;
  public size = 4;

  public uniqueId!: number;

  public deserialize(buffer: Buffer): IS_CRS {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.uniqueId = reader.readUInt8();

    return this;
  }
}
