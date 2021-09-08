import { IDeserializable, Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_NCN extends Packet implements IDeserializable {
  public type = PacketType.ISP_NCN;
  public size = 56;

  public uniqueId!: number;
  public userName!: string;
  public playerName!: string;
  public admin!: boolean;
  public totalConnections!: number;
  public remote!: boolean;

  public deserialize(buffer: Buffer): IS_NCN {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.uniqueId = reader.readUInt8();
    this.userName = reader.readString(24);
    this.playerName = reader.readString(24);
    this.admin = reader.readBoolean();
    this.totalConnections = reader.readUInt8();
    this.remote = (reader.readUInt8() & 4) > 0;

    return this;
  }
}
