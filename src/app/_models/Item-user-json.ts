
export class UserJson {

    private id: string;
    private username: string;
    private email: string;
    private password: string;
    private createdTime: string;
    private userProfileImg: string;
    
	constructor() {
    }

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $username
     * @return {string}
     */
	public get $username(): string {
		return this.username;
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
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set $username(value: string) {
		this.username = value;
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

}
