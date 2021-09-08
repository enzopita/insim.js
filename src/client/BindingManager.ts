import { Packet, IDeserializable } from '../structures/Packet';
import { PacketType } from '../types/PacketType';
import type { Client } from './Client';

type BindingCallback<T> = (data: T) => void;

export class BindingManager {
  private callbacks: Record<number, BindingCallback<Packet>> = {};

  constructor(private client: Client) {}

  public handlePacket(id: number, data: Buffer): void {
    const packet = this.client.eventsManager.getPacketById(id);
    const callback = this.callbacks[id];

    if (!packet || !callback || !this.isDeserializer(packet)) {
      return this.client.logger.debug(
        `no callback or packet handler for ${PacketType[id]}`,
      );
    }

    packet.deserialize(data);
    callback(packet);
  }

  public bind(id: number, callback: (data: any) => void): void {
    this.client.logger.debug(`loaded bind for ${PacketType[id]}`);
    this.callbacks[id] = callback;
  }

  public unbind(id: number): void {
    delete this.callbacks[id];
  }

  private isDeserializer(packet: Packet): packet is Packet & IDeserializable {
    return 'deserialize' in packet;
  }
}
