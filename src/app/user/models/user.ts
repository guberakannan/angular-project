export class User {
  name: string;
  password: string;
  presentpwd: string;
  newpwd: string;
  confirmpwd: string;
  picture: string;
  designation: string;
  organization: string;
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
