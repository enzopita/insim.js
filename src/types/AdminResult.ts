/**
 * Represents IS_ACR Result.
 */
export enum AdminResult {
  /**
   * No admin command processed.
   */
  None = 0,

  /**
   * Admin command has been processed.
   */
  Processed = 1,

  /**
   * Admin command was rejected.
   */
  Rejected = 2,

  /**
   * The admin command was not recognised.
   */
  Unknown = 3,
}
