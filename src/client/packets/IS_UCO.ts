import { CarContOBJ } from '../../structures/CarContOBJ';
import { ObjectInfo } from '../../structures/ObjectInfo';
import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { UCOAction } from '../../types/UCOAction';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_UCO extends Packet {
  public type = PacketType.ISP_UCO;
  public size = 0;

  public playerId!: number;
  public ucoAction!: UCOAction;
  public time!: number;
  public car!: CarContOBJ;
  public info!: ObjectInfo;

  public deserialize(buffer: Buffer): IS_UCO {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.playerId = reader.readUInt8();
    reader.skip(1);

    this.ucoAction = reader.readUInt8();
    reader.skip(2);

    this.time = reader.readUInt32();
    this.car = new CarContOBJ(reader);
    this.info = new ObjectInfo(reader);

    return this;
  }
}
