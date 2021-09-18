import { Packet, PacketOptions } from '../../structures/Packet';
import { Vec3 } from '../../structures/Vec3';
import { PacketType } from '../../types/PacketType';
import { StateFlags } from '../../types/StateFlags';
import { ViewIndentifier } from '../../types/ViewIdentifier';
import { PacketReader } from '../../utils/packets/PacketReader';
import { PacketWriter } from '../../utils/packets/PacketWriter';

export class IS_CPP extends Packet {
  public type = PacketType.ISP_CPP;
  public size = 32;

  public position!: Vec3;
  public heading!: number;
  public pitch!: number;
  public roll!: number;

  public viewPlayerId!: number;
  public ingameCamera!: ViewIndentifier;
  public fov!: number;
  public time!: Date;
  public flags!: StateFlags;

  constructor(options: IsCppOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.skip(1);

    writer.writeUInt8(this.size);
    writer.writeUInt16(this.position.x);
    writer.writeUInt16(this.position.y);
    writer.writeUInt16(this.position.z);

    writer.writeInt16(this.heading);
    writer.writeInt16(this.pitch);
    writer.writeInt16(this.roll);

    writer.writeUInt8(this.viewPlayerId);
    writer.writeUInt8(this.ingameCamera);
    writer.writeFloat(this.fov);

    writer.writeInt16(this.time.getMilliseconds());
    writer.writeInt16(this.flags);

    return writer.buffer;
  }

  public deserialize(buffer: Buffer): IS_CPP {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    reader.skip(1);

    this.position = new Vec3(reader.readInt32(), reader.readInt32(), reader.readInt32());
    this.heading = reader.readUInt16();
    this.pitch = reader.readUInt16();
    this.roll = reader.readUInt16();
    this.viewPlayerId = reader.readUInt8();

    this.fov = reader.readFloat();
    this.time = new Date(reader.readUInt16());
    this.flags = reader.readUInt16();

    return this;
  }
}

export type IsCppOptions = PacketOptions<IS_CPP>;
