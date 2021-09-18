export class Vec3 {
  constructor(public x: number, public y: number, public z: number) {}

  public equals(vec3: Vec3): boolean {
    return this.x === vec3.x && this.y === vec3.y && this.z === vec3.z;
  }
}
