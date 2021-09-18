import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_AXI extends Packet {
  public type = PacketType.ISP_AXI;
  public size = 40;

  public axStart!: number;
  public checkpointsCount!: number;
  public objectsCount!: number;
  public layoutName!: string;

  public deserialize(buffer: Buffer): IS_AXI {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    reader.skip(1);

    this.axStart = reader.readUInt8();
    this.checkpointsCount = reader.readUInt8();
    this.objectsCount = reader.readUInt16();
    this.layoutName = reader.readString(32);

    return this;
  }
}
