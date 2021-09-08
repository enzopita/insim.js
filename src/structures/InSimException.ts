export class InSimException extends Error {
  public name = 'InSimException';

  constructor(public message: string) {
    super();
  }
}
