
export class ItemFloatingCharsEntity {

    private _floatingCharId: number;
    private _floatingCharName: string;

	constructor() {
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

}