import { ObjectInfo } from '../../structures/ObjectInfo';
import { Packet, PacketOptions } from '../../structures/Packet';
import { JRRAction } from '../../types/JRRAction';
import { PacketType } from '../../types/PacketType';
import { PacketWriter } from '../../utils/packets/PacketWriter';

export class IS_JRR extends Packet {
  public type = PacketType.ISP_JRR;
  public size = 16;

  public playerId!: number;
  public uniqueId!: number;
  public jrrAction!: JRRAction;
  public startPos!: ObjectInfo;

  constructor(options: IsJrrOptions) {
    super();
    Object.assign(this, options);

    if (!options || !('startPos' in options)) this.startPos = new ObjectInfo();
  }

  public serialize(): Buffer {
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.writeUInt8(this.playerId);
    writer.writeUInt8(this.uniqueId);
    writer.writeUInt8(this.jrrAction);
    writer.skip(2);

    this.startPos.serialize(writer);
    return writer.buffer;
  }
}

export type IsJrrOptions = Omit<PacketOptions<IS_JRR>, 'startPos'> | Partial<Pick<IS_JRR, 'startPos'>>;
