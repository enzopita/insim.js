import { CarContOBJ } from '../../structures/CarContOBJ';
import { Packet, IDeserializable } from '../../structures/Packet';
import { ObjectFlags } from '../../types/ObjectFlags';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_OBH extends Packet implements IDeserializable {
  public type = PacketType.ISP_NONE;
  public size = 0;

  public playerId!: number;
  public closeSpeed!: number;
  public time!: Date;
  public car!: CarContOBJ;

  public x!: number;
  public y!: number;
  public zbyte!: number;

  public index!: number;
  public objectFlags!: ObjectFlags;

  public deserialize(buffer: Buffer): IS_OBH {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.playerId = reader.readUInt8();
    this.closeSpeed = reader.readUInt16();
    this.time = new Date(reader.readUInt16() * 10);
    this.car = new CarContOBJ(reader);
    this.x = reader.readInt16();
    this.y = reader.readInt16();
    this.zbyte = reader.readUInt8();
    reader.skip(1);

    this.index = reader.readUInt8();
    this.objectFlags = reader.readUInt8();

    return this;
  }
}
