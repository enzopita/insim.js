import { Packet, PacketOptions } from '../../structures/Packet';
import { ButtonStyles } from '../../types/ButtonStyles';
import { PacketType } from '../../types/PacketType';
import { LFSEncoding } from '../../utils/LFSEncoding';
import { PacketWriter } from '../../utils/packets/PacketWriter';

export class IS_BTN extends Packet {
  public type = PacketType.ISP_BTN;
  public size = 12;

  public uniqueId!: number;
  public clickId!: number;
  public inst = 0;
  public buttonStyle!: ButtonStyles;
  public typeIn = 0;

  public top!: number;
  public left!: number;

  public width!: number;
  public height!: number;

  public text!: string;
  public caption = '';

  constructor(options: IsBtnOptions) {
    super();
    Object.assign(this, options);
  }

  public serialize(): Buffer {
    if (this.typeIn > 0) {
      this.text = `\x00${this.caption}\x00${this.text}`;
    }

    const textBytes = LFSEncoding.getBytes(this.text, 240);

    this.size = 12 + Math.min(textBytes.length + (4 - (textBytes.length % 4)), 240);

    const writer = new PacketWriter(this.size);

    writer.writeUInt8(this.size);
    writer.writeUInt8(this.type);
    writer.writeUInt8(this.requestId);
    writer.writeUInt8(this.uniqueId);
    writer.writeUInt8(this.clickId);
    writer.writeUInt8(this.inst);
    writer.writeUInt8(this.buttonStyle);
    writer.writeUInt8(this.typeIn);

    writer.writeUInt8(this.left);
    writer.writeUInt8(this.top);
    writer.writeUInt8(this.width);
    writer.writeUInt8(this.height);

    writer.writeBytes(textBytes);

    return writer.buffer;
  }
}

export type IsBtnOptions = Partial<PacketOptions<IS_BTN>>;
