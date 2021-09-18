/**
 * Represents the packet type.
 */
export enum PacketType {
  /**
   * Not used.
   */
  ISP_NONE,

  /**
   * InSim Initialise
   */
  ISP_ISI,

  /**
   * Version Info
   */
  ISP_VER,

  /**
   * Multi-purpose
   */
  ISP_TINY,

  /**
   * Multi purpose
   */
  ISP_SMALL,

  /**
   * State info
   */
  ISP_STA,

  /**
   * Single character
   */
  ISP_SCH,

  /**
   * State flags pack
   */
  ISP_SFP,

  /**
   * Set car camera
   */
  ISP_SCC,

  /**
   * Cam pos pack
   */
  ISP_CPP,

  /**
   * Start multiplayer
   */
  ISP_ISM,

  /**
   * Message out
   */
  ISP_MSO,

  /**
   * Hidden /i message
   */
  ISP_III,

  /**
   * Type message or /command
   */
  ISP_MST,

  /**
   * Message to a connection
   */
  ISP_MTC,

  /**
   * Set screen mode
   */
  ISP_MOD,

  /**
   * Vote notification
   */
  ISP_VTN,

  /**
   * Race start
   */
  ISP_RST,

  /**
   * New connection
   */
  ISP_NCN,

  /**
   * Connection left
   */
  ISP_CNL,

  /**
   * Connection renamed
   */
  ISP_CPR,

  /**
   * New player (joined race)
   */
  ISP_NPL,

  /**
   * Player pit (keeps slot in race)
   */
  ISP_PLP,

  /**
   * Player leave (spectate - loses slot)
   */
  ISP_PLL,

  /**
   * Lap time
   */
  ISP_LAP,

  /**
   * Split x time
   */
  ISP_SPX,

  /**
   * Pit stop start
   */
  ISP_PIT,

  /**
   * Pit stop finish
   */
  ISP_PSF,

  /**
   * Pit lane enter / leave
   */
  ISP_PLA,

  /**
   * Camera changed
   */
  ISP_CCH,

  /**
   * Penalty given or cleared
   */
  ISP_PEN,

  /**
   * Take over car
   */
  ISP_TOC,

  /**
   * Flag (yellow or blue)
   */
  ISP_FLG,

  /**
   * Player flags (help flags)
   */
  ISP_PFL,

  /**
   * Finished race
   */
  ISP_FIN,

  /**
   * Result confirmed
   */
  ISP_RES,

  /**
   * Reorder (info or instruction)
   */
  ISP_REO,

  /**
   * Node and lap packet
   */
  ISP_NLP,

  /**
   * Multi car info
   */
  ISP_MCI,

  /**
   * Message type extended
   */
  ISP_MSX,

  /**
   * Message to local computer
   */
  ISP_MSL,

  /**
   * Car reset
   */
  ISP_CRS,

  /**
   * Delete buttons / receive button requests
   */
  ISP_BFN,

  /**
   * Autocross layout information
   */
  ISP_AXI,

  /**
   * Hit an autocross object
   */
  ISP_AXO,

  /**
   * Send button
   */
  ISP_BTN,

  /**
   * Button Click
   */
  ISP_BTC,

  /**
   * Button type
   */
  ISP_BTT,

  /**
   * Replay information packet
   */
  ISP_RIP,

  /**
   * Screenshot
   */
  ISP_SSH,

  /**
   * Contact (collision report)
   */
  ISP_CON,

  /**
   * Contact car + object (collision report)
   */
  ISP_OBH,

  /**
   * Report incidents that would violate HLVC
   */
  ISP_HLV,

  /**
   * Player cars
   */
  ISP_PLC,

  /**
   * Autocross multiple objects
   */
  ISP_AXM,

  /**
   * Admin command report
   */
  ISP_ACR,

  /**
   * Car handicaps
   */
  ISP_HCP,

  /**
   * New connection - extra info for host.
   */
  ISP_NCI,

  /**
   * Join request
   */
  ISP_JRR,

  /**
   * Report InSim checkpoint / InSim circle
   */
  ISP_UCO,

  /**
   * Object control (currently used for lights)
   */
  ISP_OCO,

  /**
   * Multi purpose - target to connection
   */
  ISP_TTC,

  /**
   * Connection has selected a car
   */
  ISP_SLC,

  /**
   * Car state changed
   */
  ISP_CSC,

  /**
   * Connection's interface mode.
   */
  ISP_CIM,

  /**
   * Admin request
   */
  IRP_ARQ = 250,

  /**
   * Admin response
   */
  IRP_ARP = 251,

  /**
   * Host list request
   */
  IRP_HLR = 252,

  /**
   * Host
   */
  IRP_HOS = 253,

  /**
   * Select host
   */
  IRP_SEL = 254,

  /**
   * Error
   */
  IRP_ERR = 255,
}
