/**
 * Represents the <see cref="IS_AXM"/> PMOAction flags.
 */
export enum ActionFlags {
  /**
   * Sent by the layout loading system only.
   */
  PMO_LOADING_FILE,

  /**
   * Adding objects (from InSim or editor).
   */
  PMO_ADD_OBJECTS,

  /**
   * Delete objects (from InSim or editor).
   */
  PMO_DEL_OBJECTS,

  /**
   * Clear all objects (NumO must be zero).
   */
  PMO_CLEAR_ALL,

  /**
   * A reply to a TINY_AXM request.
   */
  PMO_TINY_AXM,

  /**
   * A reply to a TINY_SELL request.
   */
  PMO_TTC_SEL,

  /**
   * Set the current editor selection.
   */
  PMO_SELECTION,

  /**
   * User pressed O without anything selected
   */
  PMO_POSITION,

  /**
   * Request Z values / reply with Z values
   */
  PMO_GET_Z,
}
