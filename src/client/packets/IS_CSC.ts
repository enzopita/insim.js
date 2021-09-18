import { CarContOBJ } from '../../structures/CarContOBJ';
import { Packet } from '../../structures/Packet';
import { CSCAction } from '../../types/CSCAction';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_CSC extends Packet {
  public type = PacketType.ISP_CSC;
  public size = 4;

  public playerId!: number;
  public cscAction!: CSCAction;
  public time!: Date;
  public car!: CarContOBJ;

  public deserialize(buffer: Buffer): IS_CSC {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.playerId = reader.readUInt8();
    reader.skip(1);

    this.cscAction = reader.readUInt8();
    reader.skip(2);

    this.time = new Date(reader.readUInt32() * 10);
    this.car = new CarContOBJ(reader);

    return this;
  }
}
