import * as moment from 'moment';

interface Name {
  title: string;
  first: string;
  last: string;
}

interface DOB {
  date: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export class GeneratedName {
  name: Name;
  dob: DOB;
  phone: string;
  cell: string;
  picture: Picture;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  getFullName(): string {
    return `${this.name.first} ${this.name.last}`;
  }

  getAvatar(): string {
    return this.picture.large;
  }

  getDateOfBirth(): string {
    return moment(this.dob.date).format('MM/DD/YYYY');
  }

  getCell() {
    return this.cell;
  }

  getPhone() {
    return this.phone;
  }
}

