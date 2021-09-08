import { LFSEncoding } from '../encoding/LFSEncoding';

export class PacketReader {
  public offset = 0;

  constructor(public buffer: Buffer) {}

  public skip(count: number): void {
    this.offset += count;
  }

  public readUInt8(): number {
    return this.buffer.readUInt8(this.offset++);
  }

  public readInt16(): number {
    this.offset += 2;
    return this.buffer.readInt16LE(this.offset - 2);
  }

  public readUInt16(): number {
    this.offset += 2;
    return this.buffer.readUInt16LE(this.offset - 2);
  }

  public readUInt32(): number {
    this.offset += 4;
    return this.buffer.readUInt32LE(this.offset - 4);
  }

  public readInt32(): number {
    this.offset += 4;
    return this.buffer.readInt32LE(this.offset - 4);
  }

  public readString(size: number): string {
    this.offset += size;
    return LFSEncoding.getString(this.buffer, this.offset - size, size);
  }

  public readBoolean(): boolean {
    return this.readUInt8() === 1;
  }
}
