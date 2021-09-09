import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_PLL extends Packet {
  public type = PacketType.ISP_PLL;
  public size = 4;

  public playerId!: number;

  public deserialize(buffer: Buffer): IS_PLL {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.playerId = reader.readUInt8();

    return this;
  }
}
