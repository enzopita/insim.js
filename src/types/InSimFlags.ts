/**
 * Represents the <see cref="IS_ISI"/> Flags.
 */
export enum InSimFlags {
  /**
   * Not used.
   */
  ISF_RES_0 = 1,

  /**
   * Not used.
   */
  ISF_RES_1 = 2,

  /**
   * Guest or single player.
   */
  ISF_LOCAL = 4,

  /**
   * Keep colors in <see cref="IS_MSO"/> packet text.
   */
  ISF_MSO_COLS = 8,

  /**
   * Enable <see cref="IS_NLP"/> packets.
   */
  ISF_NLP = 16,

  /**
   * Enable <see cref="IS_MCI"/> packets.
   */
  ISF_MCI = 32,

  /**
   * Enable <see cref="IS_CON"/> packets.
   */
  ISF_CON = 64,

  /**
   * Enable <see cref="IS_OBH"/> packets.
   */
  ISF_OBH = 128,

  /**
   * Enable <see cref="IS_HLV"/> packets.
   */
  ISF_HLV = 256,

  /**
   * Enable receive AXM when loading layout.
   */
  ISF_AXM_LOAD = 512,

  /**
   * Enable receive AXM when changing objects.
   */
  ISF_AXM_EDIT = 1024,

  /**
   * Enable to get send JRR join request packets.
   */
  ISF_REQ_JOIN = 2048,
}
