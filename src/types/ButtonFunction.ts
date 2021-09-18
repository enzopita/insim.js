/**
 * Represents the IS_BFN SubT.
 */
export enum ButtonFunction {
  /**
   * Delete one button or a range of buttons (must set ClickID to delete single button, to delete range set ClickID to
   * first button in range and MaxClick to last).
   
 */
  BFN_DEL_BTN,

  /**
   * Clear all buttons made by this InSim instance.
   */
  BFN_CLEAR,

  /**
   * User cleared this InSim instance's buttons.
   */
  BFN_USER_CLEAR,

  /**
   * SHIFT+B or SHIFT+I - request for buttons.
   */
  BFN_REQUEST,
}
