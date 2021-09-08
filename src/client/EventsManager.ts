import * as Packets from './packets';

import { Packet, IPacketConstructor } from '../structures/Packet';
import { PacketType } from '../types/PacketType';
import type { Client } from './Client';

export class EventsManager {
  public packets: Packet[] = [];

  constructor(private client: Client) {
    Object.values(Packets as unknown as Packet[])
      .map((packet) => this._create(packet as unknown as IPacketConstructor))
      .forEach((packet) => this._register(packet));
  }

  public getPacketById(packetId: PacketType): Packet | void {
    return this.packets.find((packet) => packet.type === packetId);
  }

  public hasPacket(packetId: PacketType): boolean {
    return !!this.getPacketById(packetId);
  }

  private _create(handler: IPacketConstructor): Packet {
    return new handler();
  }

  private _register(packet: Packet): void {
    this.client.logger.debug(`loaded packet ${PacketType[packet.type]}`);
    this.packets.push(packet);
  }
}
