import { Packet } from '../../structures/Packet';
import { PacketWriter } from '../../utils/packets/PacketWriter';
import { PacketType } from '../../types/PacketType';
import { InSimOptions } from '../InSim';
import { InSimFlags } from '../../types/InSimFlags';

export class IS_ISI extends Packet implements IsIsiOptions {
  public type = PacketType.ISP_ISI;
  public size = 44;
  public requestId = 1;

  public name!: string;
  public prefix!: string;
  public version!: number;
  public password!: string;
  public flags!: InSimFlags;
  public interval!: number;
  public udpPort!: number;

  constructor(options: IsIsiOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.skip(1);

    writer.writeUInt16(this.udpPort);
    writer.writeUInt16(this.flags);

    writer.writeUInt8(this.version);
    writer.writeString(this.prefix, 1);
    writer.writeUInt16(this.interval);

    writer.writeString(this.password, 16);
    writer.writeString(this.name, 16);

    return writer.buffer;
  }
}

export type IsIsiOptions = Pick<
  InSimOptions,
  'udpPort' | 'flags' | 'version' | 'prefix' | 'interval' | 'password' | 'name'
>;
