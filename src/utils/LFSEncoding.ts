import { encode, decode } from 'iconv-lite';

export class LFSEncoding {
  private static readonly controlChar = '^';
  private static readonly fallbackChar = '?';

  public static readonly encodingMap = new Map()
    .set('L', 'windows1252')
    .set('G', 'windows1253')
    .set('C', 'windows1251')
    .set('J', 'Shift_JIS')
    .set('E', 'windows1250')
    .set('T', 'windows1254')
    .set('B', 'windows1257')
    .set('H', 'windows936')
    .set('S', 'windows949')
    .set('K', 'windows950');

  public static readonly escapeMap = new Map()
    .set('v', '|')
    .set('a', '*')
    .set('c', ':')
    .set('d', '\\')
    .set('s', '/')
    .set('q', '?')
    .set('t', '"')
    .set('l', '<')
    .set('r', '>')
    .set('^', '^');

  public static readonly defaultEncoding = this.encodingMap.get('L');

  public static getString(
    buffer: Buffer,
    index: number,
    length: number,
  ): string {
    let text = '';

    let encoding = this.defaultEncoding;
    let i = 0;
    let start = index;

    for (i = index; i < index + length; i++) {
      const controlChar = buffer.readUInt8(i);
      const control = String.fromCharCode(controlChar);

      if (controlChar === 0) break;
      if (control !== this.controlChar) continue;

      if (i - start > 0) {
        text += decode(buffer.slice(start, start + (i - start)), encoding);
      }

      start = i + 2;

      const nextChar = buffer[++i];
      const next = String.fromCharCode(nextChar);

      if (this.encodingMap.has(next)) {
        encoding = this.encodingMap.get(next);
      } else if (this.escapeMap.has(next)) {
        text += this.escapeMap.get(next);
      } else {
        text += control;
        text += next;
      }
    }

    if (i - start > 0) {
      text += decode(buffer.slice(start, start + (i - start)), encoding);
    }

    return text;
  }

  public static getBytes(value: string, maximumSize?: number): Buffer {
    if (maximumSize) value = value.slice(0, maximumSize);
    return encode(value, this.defaultEncoding);
  }
}
