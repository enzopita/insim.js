import { PacketReader } from '../utils/packets/PacketReader';

export class CarContOBJ {
  public direction!: number;
  public heading!: number;
  public speed!: number;
  public zbyte!: number;
  public x!: number;
  public y!: number;

  constructor(reader: PacketReader) {
    this.direction = reader.readUInt8();
    this.heading = reader.readUInt8();
    this.speed = reader.readUInt8();
    reader.skip(1);

    this.x = reader.readInt16();
    this.y = reader.readInt16();
  }
}
