import { InSimException } from '../../structures/InSimException';
import { ObjectInfo } from '../../structures/ObjectInfo';
import { Packet, PacketOptions } from '../../structures/Packet';
import { ActionFlags } from '../../types/ActionFlags';
import { PacketType } from '../../types/PacketType';
import { PMOFlags } from '../../types/PMOFlags';
import { PacketReader } from '../../utils/packets/PacketReader';
import { PacketWriter } from '../../utils/packets/PacketWriter';

export class IS_AXM extends Packet {
  public type = PacketType.ISP_AXM;
  public size = 8;

  public uniqueId!: number;
  public objectsCount!: number;
  public pmoAction!: ActionFlags;
  public pmoFlags!: PMOFlags;
  public objects!: ObjectInfo[];

  constructor(options: IsAcrOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    if (this.objects.length > 30) {
      throw new InSimException('IS_AXM can have no more than 30 objects.');
    }

    this.size = 8 + this.objects.length * 8;
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.writeUInt8(this.objects.length);
    writer.writeUInt8(this.uniqueId);
    writer.writeUInt8(this.pmoAction);
    writer.writeUInt8(this.pmoFlags);
    writer.skip(1);

    for (const object of this.objects) {
      object.serialize(writer);
    }

    return writer.buffer;
  }

  public deserialize(buffer: Buffer): IS_AXM {
    const reader = new PacketReader(buffer);
    const objects: ObjectInfo[] = [];

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();

    this.objectsCount = reader.readUInt8();
    this.uniqueId = reader.readUInt8();

    this.pmoAction = reader.readUInt8();
    this.pmoFlags = reader.readUInt8();
    reader.skip(1);

    for (let i = 0; i < this.objectsCount; i++) {
      objects.push(new ObjectInfo(reader));
    }

    this.objects = objects;

    return this;
  }
}

export type IsAcrOptions = PacketOptions<IS_AXM>;
