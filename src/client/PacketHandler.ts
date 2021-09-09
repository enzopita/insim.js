import * as Packets from './packets';

import { Packet, PacketConstructor } from '../structures/Packet';
import { PacketType } from '../types/PacketType';
import type { InSim } from './InSim';

// eslint-disable-next-line
type GenericCallback = (data: any) => void;
interface Callback {
  type: PacketType;
  callback: GenericCallback;
}

export class PacketHandler {
  private callbacks: Callback[] = [];
  private initializedPackets: Packet[] = [];

  constructor(private insim: InSim) {
    const packets = Object.values(Packets) as unknown as PacketConstructor[];

    for (const Packet of packets) {
      this.initializedPackets.push(new Packet());
    }
  }

  public add(type: PacketType, callback: GenericCallback): void {
    this.callbacks.push({
      type,
      callback,
    });
  }

  public remove(type: PacketType, callback: GenericCallback): void {
    const index = this.callbacks.findIndex((cb) => cb.type === type && cb.callback === callback);
    if (index >= 0) this.callbacks.splice(index, 1);
  }

  public handlePacket(data: Buffer): void {
    const packetId = data.readUInt8(1);
    const packetHandler = this.initializedPackets.find((packet) => packet.type === packetId);
    const callbacks = this.getCallbacks(packetId);

    if (!packetHandler) {
      return this.insim.logger.warn(`No event class for ${PacketType[packetId]}`);
    }

    if (!callbacks.length) {
      return this.insim.logger.warn(`No event handler callback for ${PacketType[packetId]}`);
    }

    packetHandler.deserialize(data);
    callbacks.forEach((data) => data.callback(packetHandler));
  }

  private getCallbacks(type: PacketType): Callback[] {
    return this.callbacks.filter((cb) => cb.type === type);
  }
}
