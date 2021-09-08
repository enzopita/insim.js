import { Packet, IDeserializable } from '../../structures/Packet';
import { LeaveReason } from '../../types/LeaveReason';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_CNL extends Packet implements IDeserializable {
  public type = PacketType.ISP_CNL;
  public size = 8;

  public uniqueId!: number;
  public leaveReason!: LeaveReason;
  public totalConnections!: number;

  public deserialize(buffer: Buffer): IS_CNL {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.uniqueId = reader.readUInt8();
    this.leaveReason = reader.readUInt8();
    this.totalConnections = reader.readUInt8();

    return this;
  }
}
