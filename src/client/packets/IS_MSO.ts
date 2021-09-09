import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { UserType } from '../../types/UserType';
import { PacketReader } from '../../utils/packets/PacketReader';

const DEFAULT_SIZE = 8;

export class IS_MSO extends Packet {
  public type = PacketType.ISP_MSO;
  public size = DEFAULT_SIZE;

  public uniqueId!: number;
  public playerId!: number;
  public userType!: UserType;
  public textStart!: number;
  public message!: string;

  public deserialize(buffer: Buffer): IS_MSO {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    reader.skip(1);

    this.uniqueId = reader.readUInt8();
    this.playerId = reader.readUInt8();
    this.userType = reader.readUInt8();
    this.textStart = reader.readUInt8();

    const messageLength = this.size - DEFAULT_SIZE;

    if (this.textStart > 0) {
      const playerName = reader.readString(this.textStart);

      this.textStart = playerName.length;
      this.message = playerName + reader.readString(messageLength - this.textStart);
    } else {
      this.message = reader.readString(messageLength);
    }

    return this;
  }
}
