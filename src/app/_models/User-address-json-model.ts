

export class UserAddressJson {
    
    private _id: number;
    private _userId: string;
    private _name: string;
    private _lastnames: string;
    private _street: string;
    private _intNumber: string;
    private _extNumber: string;
    private _zipCode: string;
    private _state: string;
    private _city: string;
    private _suburb: string;
    private _reference: string;
    private _streetRef: string;
    private _phoneNumber: string;
    private _savedInProfile: boolean;

	constructor() {
        this.savedInProfile = false;
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter userId
     * @return {string}
     */
	public get userId(): string {
		return this._userId;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter lastnames
     * @return {string}
     */
	public get lastnames(): string {
		return this._lastnames;
	}

    /**
     * Getter street
     * @return {string}
     */
	public get street(): string {
		return this._street;
	}

    /**
     * Getter intNumber
     * @return {string}
     */
	public get intNumber(): string {
		return this._intNumber;
	}

    /**
     * Getter extNumber
     * @return {string}
     */
	public get extNumber(): string {
		return this._extNumber;
	}

    /**
     * Getter zipCode
     * @return {string}
     */
	public get zipCode(): string {
		return this._zipCode;
	}

    /**
     * Getter state
     * @return {string}
     */
	public get state(): string {
		return this._state;
	}

    /**
     * Getter city
     * @return {string}
     */
	public get city(): string {
		return this._city;
	}

    /**
     * Getter suburb
     * @return {string}
     */
	public get suburb(): string {
		return this._suburb;
	}

    /**
     * Getter reference
     * @return {string}
     */
	public get reference(): string {
		return this._reference;
	}

    /**
     * Getter streetRef
     * @return {string}
     */
	public get streetRef(): string {
		return this._streetRef;
	}

    /**
     * Getter phoneNumber
     * @return {string}
     */
	public get phoneNumber(): string {
		return this._phoneNumber;
	}

    /**
     * Getter savedInProfile
     * @return {boolean}
     */
	public get savedInProfile(): boolean {
		return this._savedInProfile;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter userId
     * @param {string} value
     */
	public set userId(value: string) {
		this._userId = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter lastnames
     * @param {string} value
     */
	public set lastnames(value: string) {
		this._lastnames = value;
	}

    /**
     * Setter street
     * @param {string} value
     */
	public set street(value: string) {
		this._street = value;
	}

    /**
     * Setter intNumber
     * @param {string} value
     */
	public set intNumber(value: string) {
		this._intNumber = value;
	}

    /**
     * Setter extNumber
     * @param {string} value
     */
	public set extNumber(value: string) {
		this._extNumber = value;
	}

    /**
     * Setter zipCode
     * @param {string} value
     */
	public set zipCode(value: string) {
		this._zipCode = value;
	}

    /**
     * Setter state
     * @param {string} value
     */
	public set state(value: string) {
		this._state = value;
	}

    /**
     * Setter city
     * @param {string} value
     */
	public set city(value: string) {
		this._city = value;
	}

    /**
     * Setter suburb
     * @param {string} value
     */
	public set suburb(value: string) {
		this._suburb = value;
	}

    /**
     * Setter reference
     * @param {string} value
     */
	public set reference(value: string) {
		this._reference = value;
	}

    /**
     * Setter streetRef
     * @param {string} value
     */
	public set streetRef(value: string) {
		this._streetRef = value;
	}

    /**
     * Setter phoneNumber
     * @param {string} value
     */
	public set phoneNumber(value: string) {
		this._phoneNumber = value;
	}

    /**
     * Setter savedInProfile
     * @param {boolean} value
     */
	public set savedInProfile(value: boolean) {
		this._savedInProfile = value;
	}

}

