export enum AdminStatus {
  ACTIVE = 'A',
  INACTIVE = 'I'
}

export enum UserStatus {
  ACTIVE = 'A',
  INACTIVE = 'I',
  SUSPENDED = 'S',
  TERMINATED = 'T',
  UNVERIFIED = 'U',
  PENDING = 'P',
  REJECTED = 'R'
}

export enum OrderStatus {
  COMPLETE = 'C',
  FAILED = 'F',
  PENDING = 'P'
}

export enum ExchangeKeyPermission {
  ALLOWED = 'A',
  DISALLOWED = 'D'
}