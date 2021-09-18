import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { VoteAction } from '../../types/VoteAction';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_VTN extends Packet {
  public type = PacketType.ISP_VTN;
  public size = 8;

  public uniqueId!: number;
  public action!: VoteAction;

  public deserialize(buffer: Buffer): IS_VTN {
    const reader = new PacketReader(buffer);

    this.type = reader.readUInt8();
    this.size = reader.readUInt8();
    this.requestId = reader.readUInt8();
    reader.skip(1);

    this.uniqueId = reader.readUInt8();
    this.action = reader.readUInt8();

    return this;
  }
}
