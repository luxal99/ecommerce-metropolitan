import {ShippingAddress} from './ShippingAddress';

export class UserInfo {
  id: number;
  fullName: string;
  email: string;
  telephone: string;
  idShippingAddress: ShippingAddress;


  constructor(fullName: string, email: string, telephone: string, idShippingAddress: ShippingAddress) {
    this.fullName = fullName;
    this.email = email;
    this.telephone = telephone;
    this.idShippingAddress = idShippingAddress;
  }
}
