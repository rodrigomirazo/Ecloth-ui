
export class ItemFloatingCharRelJson {

    private floatingCharId: number;
    private floatingCharName: string;
    private floatingCharCatId: number;
    private floatingCharCatName: string;
    
	constructor(floatingCharId?: number, floatingCharName?: string, floatingCharCatId?: number, floatingCharCatName?: string) {
        if(floatingCharId)
            this.floatingCharId = floatingCharId;
        if(floatingCharName)
            this.floatingCharName = floatingCharName;
        if(floatingCharCatId)
            this.floatingCharCatId = floatingCharCatId;
        if(floatingCharCatName)
		    this.floatingCharCatName = floatingCharCatName;
    }
    
    /**
     * Getter $floatingCharId
     * @return {number}
     */
	public get $floatingCharId(): number {
		return this.floatingCharId;
	}

    /**
     * Getter $floatingCharName
     * @return {string}
     */
	public get $floatingCharName(): string {
		return this.floatingCharName;
	}

    /**
     * Getter $floatingCharCatId
     * @return {number}
     */
	public get $floatingCharCatId(): number {
		return this.floatingCharCatId;
	}

    /**
     * Getter $floatingCharCatName
     * @return {string}
     */
	public get $floatingCharCatName(): string {
		return this.floatingCharCatName;
	}

    /**
     * Setter $floatingCharId
     * @param {number} value
     */
	public set $floatingCharId(value: number) {
		this.floatingCharId = value;
	}

    /**
     * Setter $floatingCharName
     * @param {string} value
     */
	public set $floatingCharName(value: string) {
		this.floatingCharName = value;
	}

    /**
     * Setter $floatingCharCatId
     * @param {number} value
     */
	public set $floatingCharCatId(value: number) {
		this.floatingCharCatId = value;
	}

    /**
     * Setter $floatingCharCatName
     * @param {string} value
     */
	public set $floatingCharCatName(value: string) {
		this.floatingCharCatName = value;
	}


}