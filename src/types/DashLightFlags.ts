/**
 * OutGauge packet ShowLights and DashLight flags.
 */
export enum DashLightFlags {
  /**
   * Shift light on.
   */
  DL_SHIFT = 1,

  /**
   * Headlights on full beam.
   */
  DL_FULLBEAM = 2,

  /**
   * Handbrake on.
   */
  DL_HANDBRAKE = 4,

  /**
   * Pit lane speed limiter on.
   */
  DL_PITSPEED = 8,

  /**
   * Traction-control on.
   */
  DL_TC = 16,

  /**
   * Left turn signal on.
   */
  DL_SIGNAL_L = 32,

  /**
   * Right turn signal on.
   */
  DL_SIGNAL_R = 64,

  /**
   * Shared turn signal on (hazard lights).
   */
  DL_SIGNAL_ANY = 128,

  /**
   * Oil pressure warning on.
   */
  DL_OILWARN = 256,

  /**
   * Battery warning light on.
   */
  DL_BATTERY = 512,

  /**
   * Anti-lock brakes active.
   */
  DL_ABS = 1024,
}
