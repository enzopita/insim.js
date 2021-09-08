/**
 * Represents the state flags.
 */
export enum StateFlags {
  /**
   * In game (or MPR).
   */
  ISS_GAME = 1,

  /**
   * In SPR.
   */
  ISS_REPLAY = 2,

  /**
   * Paused.
   */
  ISS_PAUSED = 4,

  /**
   * In Shift-U mode.
   */
  ISS_SHIFTU = 8,

  /**
   * In a dialog.
   */
  ISS_DIALOG = 16,

  /**
   * Following car.
   */
  ISS_SHIFTU_FOLLOW = 32,

  /**
   * Shift-U buttons hidden.
   */
  ISS_SHIFTU_NO_OPT = 64,

  /**
   * Showing 2D display.
   */
  ISS_SHOW_2D = 128,

  /**
   * Entry screen.
   */
  ISS_FRONT_END = 256,

  /**
   * Multiplayer mode.
   */
  ISS_MULTI = 512,

  /**
   * Multiplayer speedup option.
   */
  ISS_MPSPEEDUP = 1024,

  /**
   * LFS running in a window.
   */
  ISS_WINDOWED = 2048,

  /**
   * Sound if switched off.
   */
  ISS_SOUND_MUTE = 4096,

  /**
   * Override user view.
   */
  ISS_VIEW_OVERRIDE = 8192,

  /**
   * InSim buttons visible.
   */
  ISS_VISIBLE = 16384,

  /**
   * In a text entry dialog
   */
  ISS_TEXT_ENTRY = 32768,
}
