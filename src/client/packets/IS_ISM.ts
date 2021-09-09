import { PacketReader } from '../../utils/packets/PacketReader';
import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { HostType } from '../../types/HostType';

export class IS_ISM extends Packet {
  public type = PacketType.ISP_ISM;
  public size = 40;

  public hostType!: HostType;
  public hostName!: string;

  public deserialize(buffer: Buffer): IS_ISM {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    reader.skip(1);

    this.hostType = reader.readUInt8();
    reader.skip(3);

    this.hostName = reader.readString(32);

    return this;
  }
}
