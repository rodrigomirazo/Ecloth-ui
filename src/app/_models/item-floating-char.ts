import { ItemFloatingCharsCat } from './item-floating-char-cat';

export class ItemFloatingChars {

    private _floatingCharId: number;
    private _floatingCharName: string;
    private _catalogList: ItemFloatingCharsCat[];


	constructor(floatingCharId?: number, floatingCharName?: string, catalogList?: ItemFloatingCharsCat[]) {
        if(floatingCharId)
            this._floatingCharId = floatingCharId;
        if(floatingCharName)
            this._floatingCharName = floatingCharName;
        if(catalogList)
		    this._catalogList = catalogList;
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
     * Getter catalogList
     * @return {ItemFloatingCharsCat[]}
     */
	public get catalogList(): ItemFloatingCharsCat[] {
		return this._catalogList;
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
     * Setter catalogList
     * @param {ItemFloatingCharsCat[]} value
     */
	public set catalogList(value: ItemFloatingCharsCat[]) {
		this._catalogList = value;
	}



}