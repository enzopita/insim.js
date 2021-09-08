import {
  Packet,
  ISerializable,
  IPacketOptionalOptions,
} from '../../structures/Packet';
import { PacketWriter } from '../../utils/packets/PacketWriter';
import { PacketType } from '../../types/PacketType';
import { MessageSound } from '../../types/MessageSound';
import { LFSEncoding } from '../../utils/encoding/LFSEncoding';

export class IS_MTC extends Packet implements ISerializable {
  public type = PacketType.ISP_MTC;
  public size = 8;

  public uniqueId!: number;
  public playerId!: number;

  public message!: string;
  public messageSound!: MessageSound;

  constructor(options: IsMtcOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    const messageBytes = LFSEncoding.getBytes(this.message, 127);

    this.size =
      8 + Math.min(messageBytes.length + (4 - (messageBytes.length % 4)), 128);

    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.writeUInt8(this.messageSound);
    writer.writeUInt8(this.uniqueId);
    writer.writeUInt8(this.playerId);
    writer.skip(2);
    writer.writeBytes(messageBytes);

    return writer.buffer;
  }
}

export type IsMtcOptions = IPacketOptionalOptions<IS_MTC, 'playerId'>;
