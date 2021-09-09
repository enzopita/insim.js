import { Packet, PacketOptions } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketWriter } from '../../utils/packets/PacketWriter';

export class IS_MSX extends Packet {
  public type = PacketType.ISP_MSX;
  public size = 100;

  public message!: string;

  constructor(options: IsMsxOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.skip(1);

    writer.writeString(this.message, 96);

    return writer.buffer;
  }
}

export type IsMsxOptions = PacketOptions<IS_MSX>;
