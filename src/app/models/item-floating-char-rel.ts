
export class ItemFloatingCharRel {

    private _floatingCharId: number;
    private _floatingCharCatId: number;
    
	constructor(floatingCharId?: number, floatingCharCatId?: number) {
        if(floatingCharId) {
            this.floatingCharId = floatingCharId;
        }
        if(floatingCharCatId) {
            this.floatingCharCatId = floatingCharCatId;
        }
        
	}
	
    /**
     * Getter floatingCharId
     * @return {number}
     */
	public get floatingCharId(): number {
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
     * @param {number} value
     */
	public set floatingCharId(value: number) {
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