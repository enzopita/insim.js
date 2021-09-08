import { Packet, ISerializable, IPacketOptions } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketWriter } from '../../utils/packets/PacketWriter';

export class IS_MST extends Packet implements ISerializable {
  public type = PacketType.ISP_MST;
  public size = 68;

  public message!: string;

  constructor(options: IsMstOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.skip(1);

    writer.writeString(this.message, 64);

    return writer.buffer;
  }
}

export type IsMstOptions = IPacketOptions<IS_MST>;
