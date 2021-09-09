import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class ISP_CPR extends Packet {
  public type = PacketType.ISP_CPR;
  public size = 36;

  public uniqueId!: number;
  public playerName!: string;
  public plate!: string;

  public deserialize(buffer: Buffer): ISP_CPR {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();

    this.uniqueId = reader.readUInt8();
    this.playerName = reader.readString(24);
    this.plate = reader.readString(8);

    return this;
  }
}
