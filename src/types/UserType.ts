/**
 * Represents IS_MSO user types.
 */
export enum UserType {
  /**
   * System message.
   */
  MSO_SYSTEM,

  /**
   * Normal visible user message.
   */
  MSO_USER,

  /**
   * Hidden message starting with special prefix (see ISI prefix).
   */
  MSO_PREFIX,

  /**
   * Hidden message typed on local PC with /o command.
   */
  MSO_O,
}
