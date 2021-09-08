import { PacketReader } from '../utils/packets/PacketReader';
import { PacketWriter } from '../utils/packets/PacketWriter';

export class ObjectInfo {
  public x = 0;
  public y = 0;

  public zbyte = 0;
  public flags = 0;
  public index = 0;
  public heading = 0;

  constructor(data?: PacketReader | ObjectInfoOptions) {
    if (data instanceof PacketReader) {
      this.x = data.readInt16();
      this.y = data.readInt16();
      this.zbyte = data.readUInt8();
      this.flags = data.readUInt8();
      this.index = data.readUInt8();
      this.heading = data.readUInt8();
    } else {
      Object.assign(this, data);
    }
  }

  public serialize(writer: PacketWriter): void {
    writer.writeInt16(this.x);
    writer.writeInt16(this.y);
    writer.writeUInt8(this.zbyte);
    writer.writeUInt8(this.flags);
    writer.writeUInt8(this.index);
    writer.writeUInt8(this.heading);
  }
}

export type ObjectInfoOptions = Partial<Omit<ObjectInfo, 'serialize'>>;
