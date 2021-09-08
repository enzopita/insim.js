import { IDeserializable, Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_VER extends Packet implements IDeserializable {
  public type = PacketType.ISP_VER;
  public size = 20;

  public version!: string;
  public product!: string;
  public inSimVersion!: number;

  public deserialize(buffer: Buffer): IS_VER {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    reader.skip(1);

    this.version = reader.readString(8);
    this.product = reader.readString(6);
    this.inSimVersion = reader.readUInt8();
    reader.skip(1);

    return this;
  }
}
