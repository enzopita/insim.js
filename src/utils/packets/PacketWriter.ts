export class PacketWriter {
  public buffer!: Buffer;
  public offset = 0;

  constructor(public size: number) {
    this.buffer = Buffer.alloc(size);
  }

  public skip(count: number): void {
    this.offset += count;
  }

  public writeUInt8(value: number): void {
    this.buffer.writeUInt8(value, this.offset++);
  }

  public writeInt16(value: number): void {
    this.buffer.writeInt16LE(value, this.offset);
    this.offset += 2;
  }

  public writeUInt16(value: number): void {
    this.buffer.writeUInt16LE(value, this.offset);
    this.offset += 2;
  }

  public writeUInt32(value: number): void {
    this.buffer.writeUInt32LE(value, this.offset);
    this.offset += 4;
  }

  public writeInt32(value: number): void {
    this.buffer.writeInt32LE(value, this.offset);
    this.offset += 4;
  }

  public writeBytes(value: Buffer): void {
    for (let i = 0; i < value.length; i++) {
      this.buffer[i + this.offset] = value[i];
    }

    this.offset += value.byteLength;
  }

  public writeString(text: string, minimumSize = 0): void {
    let position = this.offset;
    this.offset += text.length;

    for (let i = 0; i < text.length; i++) {
      this.buffer.writeUInt8(text.charCodeAt(i), position++);
    }

    if (text.length < minimumSize) this.offset += minimumSize - text.length;
  }
}
