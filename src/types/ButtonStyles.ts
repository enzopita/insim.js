/**
 * Represents the <see cref="IS_BTN"/> BStyle.
 */
export enum ButtonStyles {
  /**
   * Choose a standard interface color.
   */
  ISB_C1 = 1,

  /**
   * Choose a standard interface color.
   */
  ISB_C2 = 2,

  /**
   * Choose a standard interface color.
   */
  ISB_C4 = 4,

  /**
   * When clicked this button will send a <see cref="IS_BTC"/> packet.
   */
  ISB_CLICK = 8,

  /**
   * Light button.
   */
  ISB_LIGHT = 16,

  /**
   * Dark button.
   */
  ISB_DARK = 32,

  /**
   * Align text to left.
   */
  ISB_LEFT = 64,

  /**
   * Align text to right.
   */
  ISB_RIGHT = 128,
}
