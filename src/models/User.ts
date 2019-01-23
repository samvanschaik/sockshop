export class User {


  constructor(user_id: number,
              user_name: string,
              user_postcode: string,
              user_streetnumber: string,
              user_email: string,
              user_password: string,
              user_roles: string[]) {
    this._user_id = user_id;
    this._user_name = user_name;
    this._user_postcode = user_postcode;
    this._user_streetnumber = user_streetnumber;
    this._user_password = user_password;
    this._user_email = user_email;
    this._user_roles = user_roles;
  }


  private _user_id: number;
  private _user_name: string;
  private _user_postcode: string;
  private _user_streetnumber: string;
  private _user_email: string;
  private _user_password: string;
  private _user_roles: string[];

  get user_email(): string {
    return this._user_email;
  }

  set user_email(value: string) {
    this._user_email = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get user_name(): string {
    return this._user_name;
  }

  set user_name(value: string) {
    this._user_name = value;
  }

  get user_postcode(): string {
    return this._user_postcode;
  }

  set user_postcode(value: string) {
    this._user_postcode = value;
  }

  get user_streetnumber(): string {
    return this._user_streetnumber;
  }

  set user_streetnumber(value: string) {
    this._user_streetnumber = value;
  }

  get user_password(): string {
    return this._user_password;
  }

  set user_password(value: string) {
    this._user_password = value;
  }

  get user_roles() {
    return this._user_roles;
  }

  set user_roles(value) {
    this._user_roles = value;
  }
}
