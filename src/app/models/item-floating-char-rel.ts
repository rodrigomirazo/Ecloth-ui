
export class ItemFloatingCharRel {

    private floatingCharId: number;
    private floatingCharCatId: number;
    
	constructor(floatingCharId?: number, floatingCharCatId?: number) {
        if(floatingCharId) {
            this.$floatingCharId = floatingCharId;
        }
        if(floatingCharCatId) {
            this.$floatingCharCatId = floatingCharCatId;
        }
        
	}

    /**
     * Getter $floatingCharId
     * @return {number}
     */
	public get $floatingCharId(): number {
		return this.floatingCharId;
	}

    /**
     * Getter $floatingCharCatId
     * @return {number}
     */
	public get $floatingCharCatId(): number {
		return this.floatingCharCatId;
	}

    /**
     * Setter $floatingCharId
     * @param {number} value
     */
	public set $floatingCharId(value: number) {
		this.floatingCharId = value;
	}

    /**
     * Setter $floatingCharCatId
     * @param {number} value
     */
	public set $floatingCharCatId(value: number) {
		this.floatingCharCatId = value;
	}

}