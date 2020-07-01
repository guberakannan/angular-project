export class User {
  name: string;
  password: string;
  email: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
