export class ShippingAddress {
  id: string;
  address: string;
  city: string;


  constructor(address?: string, city?: string) {
    this.address = address;
    this.city = city;
  }
}
