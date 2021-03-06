export enum HostFlags {
  /**
   * Host requires a spectator password
   */
  HOS_SPECPASS = 1,

  /**
   * Host is licensed (S1, S2 etc..)
   */
  HOS_LICENSED = 2,

  /**
   * Host is S1
   */
  HOS_S1 = 4,

  /**
   * Host is S2
   */
  HOS_S2 = 8,

  /**
   * First HInfo in this set of IR_HOS packets.
   */
  HOS_FIRST = 64,

  /**
   * Last HInfo in this set of IR_HOS packets.
   */
  HOS_LAST = 128,
}
