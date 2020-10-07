
export class ItemFloatingCharsCat {
    
    private _charId: number;
    private _charName: string;

	constructor() {
	}

    /**
     * Getter charId
     * @return {number}
     */
	public get charId(): number {
		return this._charId;
	}

    /**
     * Getter charName
     * @return {string}
     */
	public get charName(): string {
		return this._charName;
	}

    /**
     * Setter charId
     * @param {number} value
     */
	public set charId(value: number) {
		this._charId = value;
	}

    /**
     * Setter charName
     * @param {string} value
     */
	public set charName(value: string) {
		this._charName = value;
	}

}