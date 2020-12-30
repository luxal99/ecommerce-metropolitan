export class ShippingAddress {
  id: string;
  address: string;
  city: string;
  postcode: string;

  constructor(address?: string, city?: string, postcode?: string) {
    this.address = address;
    this.city = city;
    this.postcode = postcode;
  }
}
