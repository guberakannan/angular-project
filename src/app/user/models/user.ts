export class User {
  name: string;
  password: {
    pwd: string;
  };

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
