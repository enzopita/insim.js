/**
 * Represents confirmation flags.
 */
export enum ConfirmationFlags {
  /**
   * Mentioned.
   */
  CONF_MENTIONED = 1,

  /**
   * Confirmed.
   */
  CONF_CONFIRMED = 2,

  /**
   * Has drive-through penalty
   */
  CONF_PENALTY_DT = 4,

  /**
   * Has stop-and-go penalty
   */
  CONF_PENALTY_SG = 8,

  /**
   * Has 30 second time penalty
   */
  CONF_PENALTY_30 = 16,

  /**
   * Has 45 second time penalty
   */
  CONF_PENALTY_45 = 32,

  /**
   * Did not complete a required pit stop
   */
  CONF_DID_NOT_PIT = 64,

  /**
   * Is disqualified
   */
  CONF_DISQ = CONF_PENALTY_DT | CONF_PENALTY_SG | CONF_DID_NOT_PIT,

  /**
   * Has time penalty
   */
  CONF_TIME = CONF_PENALTY_30 | CONF_PENALTY_45,
}
