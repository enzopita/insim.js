import { HostFlags } from '../types/HostFlags';
import { PacketReader } from '../utils/packets/PacketReader';

export class HostInfo {
  public name!: string;
  public track!: string;
  public flags!: HostFlags;
  public connectionsCount!: number;

  constructor(reader: PacketReader) {
    this.name = reader.readString(32);
    this.track = reader.readString(6);
    this.flags = reader.readUInt8();
    this.connectionsCount = reader.readUInt8();
  }
}
