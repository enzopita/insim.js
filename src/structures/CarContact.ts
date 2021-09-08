import { ContactFlags } from '../types/ContactFlags';
import { PacketReader } from '../utils/packets/PacketReader';

export class CarContact {
  public playerId!: number;
  public contactFlags!: ContactFlags;
  public steer!: number;
  public throttleBrake!: number;
  public clutchHandbrake!: number;
  public gear!: number;
  public speed!: number;
  public direction!: number;
  public heading!: number;
  public accelerationF!: number;
  public accelerationR!: number;
  public x!: number;
  public y!: number;

  constructor(reader: PacketReader) {
    this.playerId = reader.readUInt8();
    this.contactFlags = reader.readUInt8();
    reader.skip(1);

    this.steer = reader.readUInt8();
    this.throttleBrake = reader.readUInt8();
    this.clutchHandbrake = reader.readUInt8();
    this.gear = reader.readUInt8();
    this.speed = reader.readUInt8();
    this.direction = reader.readUInt8();
    this.heading = reader.readUInt8();
    this.accelerationF = reader.readUInt8();
    this.accelerationR = reader.readUInt8();

    this.x = reader.readInt16();
    this.y = reader.readInt16();
  }
}
