import { LFSEncoding } from './LFSEncoding';
import { Constants } from '../structures/Constants';
import { IS_MST, IS_MSX } from '../client/packets';
import type { Packet } from '../structures/Packet';

export class Util {
  public static createMessagePacket(message: string, args: string[] = []): Packet {
    const msxLen = 96;
    const mstLen = 64;

    message = [message, ...args].join(' ');

    if (message.startsWith(Constants.commandPrefix)) {
      return new IS_MST({ message });
    }

    const messageBytes = LFSEncoding.getBytes(message, msxLen);

    if (messageBytes.byteLength < mstLen) {
      return new IS_MST({ message });
    }

    return new IS_MSX({ message });
  }
}
