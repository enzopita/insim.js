import { TyreCompound } from '../types/TyreCompound';

export class Tyres {
  constructor(
    public rearLeft: TyreCompound,
    public rearRight: TyreCompound,
    public frontLeft: TyreCompound,
    public frontRight: TyreCompound,
  ) {}

  public equals(tyres: Tyres): boolean {
    return (
      this.rearLeft === tyres.rearLeft &&
      this.rearRight === tyres.rearRight &&
      this.frontLeft === tyres.frontLeft &&
      this.frontRight === tyres.frontRight
    );
  }
}
