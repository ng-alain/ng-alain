import { User } from '../user/user';

export class UserExtend extends User {
    id : number;
    avatar : string;
    lastLoginTime : Date;
    isSaleUser : boolean;
    nickname : string;
    memTime : number;
    sid : string;
}