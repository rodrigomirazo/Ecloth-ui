import { UserAddressJson } from "./User-address-json-model";
import { UserAddress } from "./User-address-model";


export class User {

    private _id: string;
    private _uid: any;
    private _name: string;
    private _lastname: string;
    private _userName: string;
    private _email: string;
    private _password: string;
    private _createdTime: string;
    private _userProfileImg: string;
    private _description: string;
    private _token: string;
    private _content: string;
    private _userAdress: UserAddressJson;

	constructor(username?: string, password?: string, token?: string) {
		this._userName = username;
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
     * Getter userName
     * @return {string}
     */
	public get userName(): string {
		return this._userName;
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
     * Getter userAdress
     * @return {UserAddressJson}
     */
	public get userAdress(): UserAddressJson {
		return this._userAdress;
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
     * Setter userName
     * @param {string} value
     */
	public set userName(value: string) {
		this._userName = value;
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

    /**
     * Setter userAdress
     * @param {UserAddressJson} value
     */
	public set userAdress(value: UserAddressJson) {
		this._userAdress = value;
	}

    /**
     * Getter uid
     * @return {any}
     */
	public get uid(): any {
		return this._uid;
	}

    /**
     * Setter uid
     * @param {any} value
     */
	public set uid(value: any) {
		this._uid = value;
	}

    /**
     * Getter content
     * @return {string}
     */
	public get content(): string {
		return this._content;
	}

    /**
     * Setter content
     * @param {string} value
     */
	public set content(value: string) {
		this._content = value;
	}

}

export class UserJson {

    private id: string;
    private uid: any;
    private name: string;
    private lastname: string;
    private userName: string;
    private email: string;
    private password: string;
    private createdTime: string;
    private userProfileImg: string;
    private description: string;
    private token: string;
    private content: string;
    private userAdress: UserAddressJson;

	constructor(user: User) {
        if(user != null) {
            this.id = user.id;
            this.name = user.name;
            this.lastname = user.lastname;
            this.userName = user.userName;
            this.email = user.email;
            this.password = user.password;
            this.createdTime = user.createdTime;
            this.userProfileImg = user.userProfileImg;
            this.description = user.description;
            this.token = user.token;
        }
    }


    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $uid
     * @return {any}
     */
	public get $uid(): any {
		return this.uid;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $lastname
     * @return {string}
     */
	public get $lastname(): string {
		return this.lastname;
	}

    /**
     * Getter $userName
     * @return {string}
     */
	public get $userName(): string {
		return this.userName;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Getter $createdTime
     * @return {string}
     */
	public get $createdTime(): string {
		return this.createdTime;
	}

    /**
     * Getter $userProfileImg
     * @return {string}
     */
	public get $userProfileImg(): string {
		return this.userProfileImg;
	}

    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Getter $token
     * @return {string}
     */
	public get $token(): string {
		return this.token;
	}

    /**
     * Getter $content
     * @return {string}
     */
	public get $content(): string {
		return this.content;
	}

    /**
     * Getter $userAdress
     * @return {UserAddressJson}
     */
	public get $userAdress(): UserAddressJson {
		return this.userAdress;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $uid
     * @param {any} value
     */
	public set $uid(value: any) {
		this.uid = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $lastname
     * @param {string} value
     */
	public set $lastname(value: string) {
		this.lastname = value;
	}

    /**
     * Setter $userName
     * @param {string} value
     */
	public set $userName(value: string) {
		this.userName = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Setter $createdTime
     * @param {string} value
     */
	public set $createdTime(value: string) {
		this.createdTime = value;
	}

    /**
     * Setter $userProfileImg
     * @param {string} value
     */
	public set $userProfileImg(value: string) {
		this.userProfileImg = value;
	}

    /**
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}

    /**
     * Setter $token
     * @param {string} value
     */
	public set $token(value: string) {
		this.token = value;
	}

    /**
     * Setter $content
     * @param {string} value
     */
	public set $content(value: string) {
		this.content = value;
	}

    /**
     * Setter $userAdress
     * @param {UserAddressJson} value
     */
	public set $userAdress(value: UserAddressJson) {
		this.userAdress = value;
	}

}
