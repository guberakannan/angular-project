export class User {
  name: string;
  password: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
