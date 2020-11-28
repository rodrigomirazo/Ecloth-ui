
export class User {

    private _id: string;
    private _username: string;
    private _email: string;
    private _password: string;
    private _createdTime: string;
    private _userProfileImg: string;

    constructor(
        id?: string,
        username?: string,
        email?: string,
        password?: string,
        createdTime?: string,
        userProfileImg?: string) {

        if(id)
            this._id = id;
        if(username)
        this._username = username;
        if(email)
		this._email = email;
		this._password = password;
		this._createdTime = createdTime;
		this._userProfileImg = userProfileImg;
	}


    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
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
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
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


}
