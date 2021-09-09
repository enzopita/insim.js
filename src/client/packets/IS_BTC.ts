import { Packet } from '../../structures/Packet';
import { ClickFlags } from '../../types/ClickFlags';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_BTC extends Packet {
  public type = PacketType.ISP_BTC;
  public size = 8;

  public uniqueId!: number;
  public clickId!: number;
  public inst!: number;
  public clickFlags!: ClickFlags;

  public deserialize(buffer: Buffer): IS_BTC {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.uniqueId = reader.readUInt8();
    this.clickId = reader.readUInt8();
    this.inst = reader.readUInt8();
    this.clickFlags = reader.readUInt8();

    return this;
  }
}
