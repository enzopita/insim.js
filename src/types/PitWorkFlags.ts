/**
 * Represents the pit work flags.
 */
export enum PitWorkFlags {
  /**
   * No work done.
   */
  PSE_NOTHING = 1,

  /**
   * Stopped at pit-box.
   */
  PSE_STOP = 2,

  /**
   * Front damage.
   */
  PSE_FR_DAM = 4,

  /**
   * Front wheels changed.
   */
  PSE_FR_WHL = 8,

  /**
   * Left-front damage.
   */
  PSE_LE_FR_DAM = 16,

  /**
   * Left-front wheels changed.
   */
  PSE_LE_FR_WHL = 32,

  /**
   * Right-front damaged.
   */
  PSE_RI_FR_DAM = 64,

  /**
   * Right-front wheel changed.
   */
  PSE_RI_FR_WHL = 128,

  /**
   * Rear damage.
   */
  PSE_RE_DAM = 256,

  /**
   * Rear wheels changed.
   */
  PSE_RE_WHL = 512,

  /**
   * Left-rear damage.
   */
  PSE_LE_RE_DAM = 1024,

  /**
   * Left-rear wheel changed.
   */
  PSE_LE_RE_WHL = 2048,

  /**
   * Right-rear damage.
   */
  PSE_RI_RE_DAM = 4096,

  /**
   * Right-rear wheel changed.
   */
  PSE_RI_RE_WHL = 8192,

  /**
   * Minor body damage.
   */
  PSE_BODY_MINOR = 16384,

  /**
   * Major body damage.
   */
  PSE_BODY_MAJOR = 32768,

  /**
   * Setup changed.
   */
  PSE_SETUP = 65536,

  /**
   * Refuelled.
   */
  PSE_REFUEL = 131072,
}
