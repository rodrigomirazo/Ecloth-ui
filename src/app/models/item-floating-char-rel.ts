
export class ItemFloatingCharRel {

    private floatingCharId: number;
    private floatingCharName: string;
    private floatingCharCatId: number;
    private floatingCharCatName: string;
    
    
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
    
    /**
     * Getter $floatingCharName
     * @return {string}
     */
	public get $floatingCharName(): string {
		return this.floatingCharName;
	}

    /**
     * Getter $floatingCharCatName
     * @return {string}
     */
	public get $floatingCharCatName(): string {
		return this.floatingCharCatName;
	}

    /**
     * Setter $floatingCharName
     * @param {string} value
     */
	public set $floatingCharName(value: string) {
		this.floatingCharName = value;
	}

    /**
     * Setter $floatingCharCatName
     * @param {string} value
     */
	public set $floatingCharCatName(value: string) {
		this.floatingCharCatName = value;
	}


}