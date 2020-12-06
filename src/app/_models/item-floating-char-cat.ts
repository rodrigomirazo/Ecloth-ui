
export class ItemFloatingCharsCat {
    
    private _charId: number;
    private _charName: string;
    private _isSelected: boolean;

	constructor() {
        this.isSelected = false;
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
    
    /**
     * Getter isSelected
     * @return {boolean}
     */
	public get isSelected(): boolean {
		return this._isSelected;
	}

    /**
     * Setter isSelected
     * @param {boolean} value
     */
	public set isSelected(value: boolean) {
		this._isSelected = value;
	}

}