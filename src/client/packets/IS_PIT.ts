import { Packet } from '../../structures/Packet';
import { Tyres } from '../../structures/Tyres';
import { PacketType } from '../../types/PacketType';
import { PenaltyValue } from '../../types/PenaltyValue';
import { PitWorkFlags } from '../../types/PitWorkFlags';
import { PlayerFlags } from '../../types/PlayerFlags';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_PIT extends Packet {
  public type = PacketType.ISP_PIT;
  public size = 24;

  public playerId!: number;
  public lapsDone!: number;
  public flags!: PlayerFlags;
  public fuelAdd!: number;
  public penalty!: PenaltyValue;
  public pitStopCount!: number;
  public tyres!: Tyres;
  public work!: PitWorkFlags;

  public deserialize(buffer: Buffer): IS_PIT {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.playerId = reader.readUInt8();
    this.lapsDone = reader.readUInt16();
    this.flags = reader.readUInt16();
    this.fuelAdd = reader.readUInt8();
    this.penalty = reader.readUInt8();
    this.pitStopCount = reader.readUInt8();
    reader.skip(1);

    this.tyres = new Tyres(reader.readUInt8(), reader.readUInt8(), reader.readUInt8(), reader.readUInt8());
    this.work = reader.readUInt32();

    return this;
  }
}
