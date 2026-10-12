export class Message {
  private _name!: string;
  private _email!: string;
  private _text!: string;
  private _hasAttended!: boolean;
  private _wantsNotifications!: boolean;

  constructor(
    name: string,
    email: string,
    text: string,
    hasAttended: boolean,
    wantsNotifications: boolean,
  ) {
    this.name = name;
    this.email = email;
    this.text = text;
    this.hasAttended = hasAttended;
    this.wantsNotifications = wantsNotifications;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (!value.trim()) throw new Error("Ingresá tu nombre.");
    this._name = value.trim();
  }

  get email(): string {
    return this._email;
  }
  set email(value: string) {
    if (!value.trim()) throw new Error("Ingresá tu correo electrónico.");
    this._email = value.trim();
  }

  get text(): string {
    return this._text;
  }
  set text(value: string) {
    if (!value.trim()) throw new Error("Escribí tu consulta.");
    this._text = value.trim();
  }

  get hasAttended(): boolean {
    return this._hasAttended;
  }
  set hasAttended(value: boolean) {
    this._hasAttended = value;
  }

  get wantsNotifications(): boolean {
    return this._wantsNotifications;
  }
  set wantsNotifications(value: boolean) {
    this._wantsNotifications = value;
  }
}
