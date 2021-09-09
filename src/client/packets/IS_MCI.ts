import { CompCar } from '../../structures/CompCar';
import { Packet } from '../../structures/Packet';
import { PacketType } from '../../types/PacketType';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_MCI extends Packet {
  public type = PacketType.ISP_MCI;
  public size = 28;

  public carsCount = 0;
  public cars: CompCar[] = [];

  public deserialize(buffer: Buffer): IS_MCI {
    const cars: CompCar[] = [];
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.carsCount = reader.readUInt8();

    for (let i = 0; i < this.carsCount; i++) {
      cars.push(new CompCar(reader));
    }

    this.cars = cars;

    return this;
  }
}
