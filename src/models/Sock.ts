export class Sock {
  constructor(sock_name: string, sock_size: string, sock_color: string, sock_price: number, sock_amount_stocked: number, sock_url: string) {
    this._sock_name = sock_name;
    this._sock_size = sock_size;
    this._sock_color = sock_color;
    this._sock_price = sock_price;
    this._sock_amount_stocked = sock_amount_stocked;
    this._sock_url = sock_url;
  }

  private _sock_name: string;
  private _sock_size: string;
  private _sock_color: string;
  private _sock_price: number;
  private _sock_amount_stocked: number;
  private _sock_url: string;


  get sock_url(): string {
    return this._sock_url;
  }

  set sock_url(value: string) {
    this._sock_url = value;
  }

  get sock_name(): string {
    return this._sock_name;
  }

  set sock_name(value: string) {
    this._sock_name = value;
  }

  get sock_size(): string {
    return this._sock_size;
  }

  set sock_size(value: string) {
    this._sock_size = value;
  }

  get sock_color(): string {
    return this._sock_color;
  }

  set sock_color(value: string) {
    this._sock_color = value;
  }

  get sock_price(): number {
    return this._sock_price;
  }

  set sock_price(value: number) {
    this._sock_price = value;
  }

  get sock_amount_stocked(): number {
    return this._sock_amount_stocked;
  }

  set sock_amount_stocked(value: number) {
    this._sock_amount_stocked = value;
  }
}
