import { CarContact } from '../../structures/CarContact';
import { Packet, IDeserializable } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_CON extends Packet implements IDeserializable {
  public type = PacketType.ISP_CON;
  public size = 40;

  public speedClose!: number;
  public time!: Date;

  public carA!: CarContact;
  public carB!: CarContact;

  public deserialize(buffer: Buffer): IS_CON {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    reader.skip(1);

    this.speedClose = reader.readUInt16();
    this.time = new Date(reader.readUInt16() * 10);

    this.carA = new CarContact(reader);
    this.carB = new CarContact(reader);

    return this;
  }
}
