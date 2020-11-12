
export class ItemFloatingCharRel {

    private _floatingCharId: number;
    private _floatingCharName: string;
    private _floatingCharCatId: number;
    private _floatingCharCatName: string;
    

	constructor(floatingCharId?: number, floatingCharName?: string, floatingCharCatId?: number, floatingCharCatName?: string) {
        if(floatingCharId)
            this._floatingCharId = floatingCharId;
        if(floatingCharName)
            this._floatingCharName = floatingCharName;
        if(floatingCharCatId)
            this._floatingCharCatId = floatingCharCatId;
        if(floatingCharCatName)
		    this._floatingCharCatName = floatingCharCatName;
	}
    

    /**
     * Getter floatingCharId
     * @return {number}
     */
	public get floatingCharId(): number {
		return this._floatingCharId;
	}

    /**
     * Getter floatingCharName
     * @return {string}
     */
	public get floatingCharName(): string {
		return this._floatingCharName;
	}

    /**
     * Getter floatingCharCatId
     * @return {number}
     */
	public get floatingCharCatId(): number {
		return this._floatingCharCatId;
	}

    /**
     * Getter floatingCharCatName
     * @return {string}
     */
	public get floatingCharCatName(): string {
		return this._floatingCharCatName;
	}

    /**
     * Setter floatingCharId
     * @param {number} value
     */
	public set floatingCharId(value: number) {
		this._floatingCharId = value;
	}

    /**
     * Setter floatingCharName
     * @param {string} value
     */
	public set floatingCharName(value: string) {
		this._floatingCharName = value;
	}

    /**
     * Setter floatingCharCatId
     * @param {number} value
     */
	public set floatingCharCatId(value: number) {
		this._floatingCharCatId = value;
	}

    /**
     * Setter floatingCharCatName
     * @param {string} value
     */
	public set floatingCharCatName(value: string) {
		this._floatingCharCatName = value;
	}


}