import { CompCarFlags } from '../types/CompCarFlags';
import { PacketReader } from '../utils/packets/PacketReader';

export class CompCar {
  public node!: number;
  public lap!: number;
  public playerId!: number;
  public position!: number;
  public flags!: CompCarFlags;

  public x!: number;
  public y!: number;
  public z!: number;

  public speed!: number;
  public direction!: number;
  public heading!: number;
  public angVel!: number;

  constructor(reader: PacketReader) {
    this.node = reader.readUInt16();
    this.lap = reader.readUInt16();
    this.playerId = reader.readUInt8();
    this.position = reader.readUInt8();
    this.flags = reader.readUInt8();
    reader.skip(1);

    this.x = reader.readInt32();
    this.y = reader.readInt32();
    this.z = reader.readInt32();

    this.speed = reader.readUInt16();
    this.direction = reader.readUInt16();
    this.heading = reader.readUInt16();
    this.angVel = reader.readInt16();
  }
}
