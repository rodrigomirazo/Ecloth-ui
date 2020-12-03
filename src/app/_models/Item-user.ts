
export class User {

    private _id: string;
    private _name: string;
    private _lastname: string;
    private _username: string;
    private _email: string;
    private _password: string;
    private _createdTime: string;
    private _userProfileImg: string;
    private _description: string;
    private _token: string;

	constructor(username?: string, password?: string, token?: string) {
		this._username = username;
		this._password = password;
		this._token = token;
    }
    
    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter lastname
     * @return {string}
     */
	public get lastname(): string {
		return this._lastname;
	}

    /**
     * Getter username
     * @return {string}
     */
	public get username(): string {
		return this._username;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Getter createdTime
     * @return {string}
     */
	public get createdTime(): string {
		return this._createdTime;
	}

    /**
     * Getter userProfileImg
     * @return {string}
     */
	public get userProfileImg(): string {
		return this._userProfileImg;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter token
     * @return {string}
     */
	public get token(): string {
		return this._token;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter lastname
     * @param {string} value
     */
	public set lastname(value: string) {
		this._lastname = value;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Setter createdTime
     * @param {string} value
     */
	public set createdTime(value: string) {
		this._createdTime = value;
	}

    /**
     * Setter userProfileImg
     * @param {string} value
     */
	public set userProfileImg(value: string) {
		this._userProfileImg = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter token
     * @param {string} value
     */
	public set token(value: string) {
		this._token = value;
	}

}
