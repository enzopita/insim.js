import { Packet, IDeserializable } from '../../structures/Packet';
import { Tyres } from '../../structures/Tyres';
import { PacketType } from '../../types/PacketType';
import { PassengerFlags } from '../../types/PassengerFlags';
import { PlayerFlags } from '../../types/PlayerFlags';
import { PlayerTypes } from '../../types/PlayerTypes';
import { SetupFlags } from '../../types/SetupFlags';
import { PacketReader } from '../../utils/packets/PacketReader';

export class IS_NPL extends Packet implements IDeserializable {
  public type = PacketType.ISP_NPL;
  public size = 76;

  public playerId!: number;
  public uniqueId!: number;

  public playerType!: PlayerTypes;
  public playerFlags!: PlayerFlags;
  public playerName!: string;

  public plate!: string;

  public carName!: string;
  public skinName!: string;
  public tyres!: Tyres;

  public addedMass!: number;
  public intakeRestriction!: number;
  public model!: number;

  public passengerFlags!: PassengerFlags;
  public rwAdj!: number;
  public fwAdj!: number;

  public setupFlags!: SetupFlags;
  public playersInRace!: number;

  public config!: number;
  public fuel!: number;

  public deserialize(buffer: Buffer): IS_NPL {
    const reader = new PacketReader(buffer);

    this.size = reader.readUInt8();
    this.type = reader.readUInt8();
    this.requestId = reader.readUInt8();
    this.playerId = reader.readUInt8();
    this.uniqueId = reader.readUInt8();

    this.playerType = reader.readUInt8();
    this.playerFlags = reader.readUInt16();
    this.playerName = reader.readString(24);

    this.plate = reader.readString(8);
    this.carName = reader.readString(4);
    this.skinName = reader.readString(16);

    this.tyres = new Tyres(
      reader.readUInt8(),
      reader.readUInt8(),
      reader.readUInt8(),
      reader.readUInt8(),
    );

    this.addedMass = reader.readUInt8();
    this.intakeRestriction = reader.readUInt8();

    this.model = reader.readUInt8();
    this.passengerFlags = reader.readUInt8();

    this.rwAdj = reader.readUInt8();
    this.fwAdj = reader.readUInt8();
    reader.skip(2);

    this.setupFlags = reader.readUInt8();
    this.playersInRace = reader.readUInt8();

    this.config = reader.readUInt8();
    this.fuel = reader.readUInt8();

    return this;
  }
}
