import * as bcrypt from 'bcryptjs';

export function hash(value: any): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(value, salt);
}
