/**
 * Represents JRR packet actions.
 */
export enum JRRAction {
  /**
   * Reject new player.
   */
  JRR_REJECT = 0,

  /**
   * Allow new player.
   */
  JRR_SPAWN = 1,

  /**
   * Reset.
   */
  JRR_RESET = 4,

  /**
   * No repair.
   */
  JRR_RESET_NO_REPAIR = 5,
}
