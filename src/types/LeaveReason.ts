/**
 * Enumeration for the <see cref="IS_CNL"/> disconnect reason.
 */
export enum LeaveReason {
  /**
   * Disconnect.
   */
  LEAVR_DISCO,

  /**
   * Timed out.
   */
  LEAVR_TIMEOUT,

  /**
   * Lost connection.
   */
  LEAVR_LOSTCONN,

  /**
   * Kicked.
   */
  LEAVR_KICKED,

  /**
   * Banned.
   */
  LEAVR_BANNED,

  /**
   * Out-of-sync (OOS) or cheat protection.
   */
  LEAVR_SECURITY,

  /**
   * Cheat protection wrong.
   */
  LEAVR_CPW,

  /**
   * Out of sync with host.
   */
  LEAVR_OOS,

  /**
   * Join OOS (initial sync failed).
   */
  LEAVR_JOOS,

  /**
   * Invalid packet.
   */
  LEAVR_HACK,
}
