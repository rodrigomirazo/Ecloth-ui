
export class ItemImgUrlsJson {

    private id: number;
    private itemId: number;
    private createdTime: number;
    private imgUrl: String;
    private imgServer: String;

	constructor() {
	}
	
    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $itemId
     * @return {number}
     */
	public get $itemId(): number {
		return this.itemId;
	}

    /**
     * Getter $createdTime
     * @return {number}
     */
	public get $createdTime(): number {
		return this.createdTime;
	}

    /**
     * Getter $imgUrl
     * @return {String}
     */
	public get $imgUrl(): String {
		return this.imgUrl;
	}

    /**
     * Getter $imgServer
     * @return {String}
     */
	public get $imgServer(): String {
		return this.imgServer;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $itemId
     * @param {number} value
     */
	public set $itemId(value: number) {
		this.itemId = value;
	}

    /**
     * Setter $createdTime
     * @param {number} value
     */
	public set $createdTime(value: number) {
		this.createdTime = value;
	}

    /**
     * Setter $imgUrl
     * @param {String} value
     */
	public set $imgUrl(value: String) {
		this.imgUrl = value;
	}

    /**
     * Setter $imgServer
     * @param {String} value
     */
	public set $imgServer(value: String) {
		this.imgServer = value;
	}


}