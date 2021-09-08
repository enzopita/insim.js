/**
 * Represents the <see cref="IS_TINY"/> SubT.
 */
export enum TinyType {
  /**
   * Keep alive. Used for maintaining the connection.
   */
  TINY_NONE,

  /**
   * Request for a version packet to be sent.
   */
  TINY_VER,

  /**
   * Close InSim.
   */
  TINY_CLOSE,

  /**
   * External program requesting a reply.
   */
  TINY_PING,

  /**
   * Reply to a ping request.
   */
  TINY_REPLY,

  /**
   * Vote cancelled.
   */
  TINY_VTC,

  /**
   * Send camera pos.
   */
  TINY_SCP,

  /**
   * Send state info.
   */
  TINY_SST,

  /**
   * Get time in hundredths (i.e. SMALL_RTP).
   */
  TINY_GTH,

  /**
   * Multi player end.
   */
  TINY_MPE,

  /**
   * Get multiplayer info (i.e. ISP_ISM).
   */
  TINY_ISM,

  /**
   * Race end (return to game setup screen).
   */
  TINY_REN,

  /**
   * All players cleared from race.
   */
  TINY_CLR,

  /**
   * Get all connections.
   */
  TINY_NCN,

  /**
   * Get all players.
   */
  TINY_NPL,

  /**
   * Get all results.
   */
  TINY_RES,

  /**
   * Send an IS_NLP.
   */
  TINY_NLP,

  /**
   * Send an IS_MCI.
   */
  TINY_MCI,

  /**
   * Send an IS_REO.
   */
  TINY_REO,

  /**
   * Send an IS_RST.
   */
  TINY_RST,

  /**
   * Send an IS_AXI - AutoX Info.
   */
  TINY_AXI,

  /**
   * Autocross cleared.
   */
  TINY_AXC,

  /**
   * Send an IS_RIP - Replay Information Packet.
   */
  TINY_RIP,

  /**
   * Send an IS_NCI for all guests (on host only)
   */
  TINY_NCI,

  /**
   * Request a SMALL_ALC is sent.
   */
  TINY_ALC,

  /**
   * Request all IS_AXM packets sent.
   */
  TINY_AXM,

  /**
   * Request IS_SLC packets for all players
   */
  TINY_SLC,
}
