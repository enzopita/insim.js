import { Packet } from '../../structures/Packet';
import { AdminResult } from '../../types/AdminResult';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

const DEFAULT_SIZE = 8;

export class IS_ACR extends Packet {
  public type = PacketType.ISP_ACR;
  public size = DEFAULT_SIZE;

  public uniqueId!: number;
  public admin!: boolean;
  public result!: AdminResult;
  public text!: string;

  public deserialize(buffer: Buffer): IS_ACR {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    reader.skip(1);

    this.uniqueId = reader.readUInt8();
    this.admin = reader.readBoolean();
    this.result = reader.readUInt8();
    reader.skip(1);

    this.text = reader.readString(this.size - DEFAULT_SIZE);

    return this;
  }
}
