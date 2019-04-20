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

  getFullName() {
    return `${this.name.first} ${this.name.last}`;
  }

  getAvatar() {
    return this.picture.large;
  }
}

