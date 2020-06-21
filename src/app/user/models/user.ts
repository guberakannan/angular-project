export class User {
  domain: string;
  email: string;
  password: {
    pwd: string;
    confirmPwd: string;
  };
  terms: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
