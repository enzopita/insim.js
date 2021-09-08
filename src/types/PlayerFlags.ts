/**
 * Represents the player flags.
 */
export enum PlayerFlags {
  /**
   * Left-hand drive.
   */
  PIF_SWAPSIDE = 1,

  /**
   * Auto gears enabled.
   */
  PIF_AUTOGEARS = 8,

  /**
   * H-Shifter.
   */
  PIF_SHIFTER = 16,

  /**
   * Brake help.
   */
  PIF_HELP_B = 64,

  /**
   * Axis clutch pedal.
   */
  PIF_AXIS_CLUTCH = 128,

  /**
   * In pits.
   */
  PIF_INPITS = 256,

  /**
   * Auto-clutch.
   */
  PIF_AUTOCLUTCH = 512,

  /**
   * Mouse steering.
   */
  PIF_MOUSE = 1024,

  /**
   * Keyboard no help.
   */
  PIF_KB_NO_HELP = 2048,

  /**
   * Keyboard stabilized.
   */
  PIF_KB_STABILISED = 4096,

  /**
   * Custom view.
   */
  PIF_CUSTOM_VIEW = 8192,
}
