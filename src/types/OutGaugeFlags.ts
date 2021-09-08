/**
 * OutGauge packet flags.
 */
export enum OutGaugeFlags {
  /**
   * Key,
   */
  OG_SHIFT = 1,

  /**
   * Key,
   */
  OG_CTRL = 2,

  /**
   * Show turbo gauge
   */
  OG_TURBO = 8192,

  /**
   * Use prefers KM (as opposed to Miles).
   */
  OG_KM = 16384,

  /**
   * Use prefers Bars (as opposed to PSI).
   */
  OG_BAR = 32768,
}
