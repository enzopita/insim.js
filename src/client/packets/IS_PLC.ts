import { Packet, PacketOptions } from '../../structures/Packet';
import { CarFlags } from '../../types/CarFlags';
import { PacketType } from '../../types/PacketType';
import { PacketWriter } from '../../utils/packets/PacketWriter';

export class IS_PLC extends Packet {
  public type = PacketType.ISP_PLC;
  public size = 12;

  public uniqueId!: number;
  public carFlags!: CarFlags;

  constructor(options: IsPlcOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.skip(1);

    writer.writeUInt8(this.uniqueId);
    writer.skip(3);

    writer.writeInt32(this.carFlags);

    return writer.buffer;
  }
}

export type IsPlcOptions = PacketOptions<IS_PLC>;
