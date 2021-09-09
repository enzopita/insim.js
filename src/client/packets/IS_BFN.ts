import { Packet, PacketOptionalOptions } from '../../structures/Packet';
import { ButtonFunction } from '../../types/ButtonFunction';
import { PacketType } from '../../types/PacketType';
import { PacketWriter } from '../../utils/packets/PacketWriter';

export class IS_BFN extends Packet {
  public type = PacketType.ISP_BFN;
  public size = 8;

  public subType!: ButtonFunction;
  public uniqueId!: number;
  public clickId!: number;
  public clickMax!: number;
  public inst!: number;

  constructor(options: IsBfnOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.writeUInt8(this.uniqueId);
    writer.writeUInt8(this.clickId);
    writer.writeUInt8(this.clickMax);
    writer.writeUInt8(this.inst);

    return writer.buffer;
  }
}

export type IsBfnOptions = PacketOptionalOptions<IS_BFN, 'clickMax' | 'subType' | 'inst'>;
