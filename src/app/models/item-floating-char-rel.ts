
export class ItemFloatingCharRel {

    private _floatingCharId: string;
    private _floatingCharCatId: number;
    
	constructor() {
    }
    
    /**
     * Getter floatingCharId
     * @return {string}
     */
	public get floatingCharId(): string {
		return this._floatingCharId;
	}

    /**
     * Getter floatingCharCatId
     * @return {number}
     */
	public get floatingCharCatId(): number {
		return this._floatingCharCatId;
	}

    /**
     * Setter floatingCharId
     * @param {string} value
     */
	public set floatingCharId(value: string) {
		this._floatingCharId = value;
	}

    /**
     * Setter floatingCharCatId
     * @param {number} value
     */
	public set floatingCharCatId(value: number) {
		this._floatingCharCatId = value;
	}

}