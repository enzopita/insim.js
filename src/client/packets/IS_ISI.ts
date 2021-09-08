import { IPacketOptions, ISerializable, Packet } from '../../structures/Packet';
import { Defaults } from '../../structures/Constants';
import { PacketWriter } from '../../utils/packets/PacketWriter';
import { PacketType } from '../../types/PacketType';
import type { ClientInSimOptions } from '../Client';

export class IS_ISI extends Packet implements ISerializable {
  public type = PacketType.ISP_ISI;
  public size = 44;
  public requestId = 1;

  public name = Defaults.INSIM_NAME;
  public prefix = Defaults.INSIM_PREFIX;
  public version = Defaults.INSIM_VERSION;
  public password = '';
  public flags = 0;
  public interval = 0;
  public udpPort = 0;

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

export type IsIsiOptions = Partial<ClientInSimOptions> & IPacketOptions<IS_ISI>;
