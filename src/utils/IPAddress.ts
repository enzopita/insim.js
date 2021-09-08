export class IPAddress {
  public static fromLong(value: number): string {
    return [
      value & 255,
      (value >> 8) & 255,
      (value >> 16) & 255,
      value >>> 24,
    ].join('.');
  }

  public static toLong(address: string): number {
    let long = 0;

    address.split('.').forEach((octet) => {
      long <<= 8;
      long += parseInt(octet);
    });

    return long >>> 0;
  }
}
