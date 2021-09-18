import { Packet } from '../../structures/Packet';
import { ConfirmationFlags } from '../../types/ConfirmationFlags';
import { PacketType } from '../../types/PacketType';
import { PlayerFlags } from '../../types/PlayerFlags';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_FIN extends Packet {
  public type = PacketType.ISP_FIN;
  public size = 20;

  public playerId!: number;

  public totalRaceTime!: Date;
  public bestLapTime!: Date;
  public pitStopCount!: number;
  public confirmationFlags!: ConfirmationFlags;

  public lapsDone!: number;
  public flags!: PlayerFlags;

  public deserialize(buffer: Buffer): IS_FIN {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();

    this.playerId = reader.readUInt8();
    this.totalRaceTime = new Date(reader.readUInt32());
    this.bestLapTime = new Date(reader.readUInt32());
    reader.skip(1);

    this.pitStopCount = reader.readUInt8();
    this.confirmationFlags = reader.readUInt8();
    reader.skip(1);

    this.lapsDone = reader.readUInt16();
    this.flags = reader.readUInt16();

    return this;
  }
}
