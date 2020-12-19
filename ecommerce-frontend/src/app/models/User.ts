import {Role} from './Role';
import {UserInfo} from './UserInfo';

export class User {
  id: number;
  username: string;
  password: string;
  idRole: Role;
  idUserInfo: UserInfo;


  constructor(username: string, password: string, idRole: Role, idUserInfo: UserInfo) {
    this.username = username;
    this.password = password;
    this.idRole = idRole;
    this.idUserInfo = idUserInfo;
  }
}
