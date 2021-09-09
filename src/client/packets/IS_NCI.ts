import { Packet } from '../../structures/Packet';
import { LFSLanguage } from '../../types/LFSLanguage';
import { PacketType } from '../../types/PacketType';
import { IPAddress } from '../../utils/IPAddress';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_NCI extends Packet {
  public type = PacketType.ISP_NCI;
  public size = 16;

  public uniqueId!: number;
  public language!: LFSLanguage;
  public userId!: number;
  public ipAddress!: string;

  public deserialize(buffer: Buffer): IS_NCI {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.uniqueId = reader.readUInt8();
    this.language = reader.readUInt8();
    reader.skip(3);

    this.userId = reader.readUInt32();
    this.ipAddress = IPAddress.fromLong(reader.readUInt32());

    return this;
  }
}
