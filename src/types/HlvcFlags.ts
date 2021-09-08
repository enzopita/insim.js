/**
 * Represents the <see cref="IS_HLV"/> packets's HLVC property.
 */
export enum HlvcFlags {
  /**
   * Car has hit the groud.
   */
  Ground = 0,

  /**
   * Car has hit a wall.
   */
  Wall = 1,

  /**
   * Car was speeding in pits.
   */
  Speeding = 4,
}
