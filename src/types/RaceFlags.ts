/**
 * Represents the host race flags.
 */
export enum RaceFlags {
  /**
   * Voting.
   */
  HOSTF_CAN_VOTE = 1,

  /**
   * Track select.
   */
  HOSTF_CAN_SELECT = 2,

  /**
   * Mid-race join.
   */
  HOSTF_MID_RACE = 32,

  /**
   * Mandatory pit-stop.
   */
  HOSTF_MUST_PIT = 64,

  /**
   * Can reset car.
   */
  HOSTF_CAN_RESET = 128,

  /**
   * Forced cockpit view.
   */
  HOSTF_FCV = 256,

  /**
   * Cruise mode.
   */
  HOSTF_CRUISE = 512,
}
