import { Packet, ISerializable, IPacketOptions } from '../../structures/Packet';
import { BulbInfo } from '../../types/BulbInfo';
import { OCOAction } from '../../types/OCOAction';
import { OCOIndex } from '../../types/OCOIndex';
import { PacketType } from '../../types/PacketType';
import { PacketWriter } from '../../utils/packets/PacketWriter';

export class IS_OCO extends Packet implements ISerializable {
  public type = PacketType.ISP_OCO;
  public size = 8;

  public ocoAction!: OCOAction;
  public ocoIndex!: OCOIndex;
  public identifier!: number;
  public bulbInfo!: BulbInfo;

  constructor(options: IsOcoOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.skip(1);

    writer.writeUInt8(this.ocoAction);
    writer.writeUInt8(this.ocoIndex);
    writer.writeUInt8(this.identifier);
    writer.writeUInt8(this.bulbInfo);

    return writer.buffer;
  }
}

export type IsOcoOptions = IPacketOptions<IS_OCO>;
