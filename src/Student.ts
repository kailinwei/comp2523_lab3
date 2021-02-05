import faker from "faker";
export class Student {
  firstName: string;
  lastName: string;
  location: {
    latitude: number;
    longitude: number;
  };
  infoWindow:string;    // add here because info window needs to be invloved in CustomizedMap.ts

  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
    this.infoWindow =faker.address.streetAddress();
  }
}
