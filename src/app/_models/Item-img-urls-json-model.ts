
export class ItemImgUrlsJson {

    private id: number;
    private itemId: number;
    private createdTime: number;
    private imgUrl: string;
    private imgServer: string;

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
     * @return {string}
     */
	public get $imgUrl(): string {
		return this.imgUrl;
	}

    /**
     * Getter $imgServer
     * @return {string}
     */
	public get $imgServer(): string {
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
     * @param {string} value
     */
	public set $imgUrl(value: string) {
		this.imgUrl = value;
	}

    /**
     * Setter $imgServer
     * @param {string} value
     */
	public set $imgServer(value: string) {
		this.imgServer = value;
	}
	
}