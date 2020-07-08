
export class Item {

    private _id: string;
    private _statusId: number;
    private _itemColorId: number;
    private _itemTypeCatId: number;
    private _itemTransactionId: number;
    private _name: string;
    private _price: number;
    private _originalPrice: number;
    private _discount: number;
    private _description: string;
    private _fleetCost: number;
    private _sizeId: string;
    private _lastLevelCategoryId: number;

	constructor() {
    }
    
    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter statusId
     * @return {number}
     */
	public get statusId(): number {
		return this._statusId;
	}

    /**
     * Getter itemColorId
     * @return {number}
     */
	public get itemColorId(): number {
		return this._itemColorId;
	}

    /**
     * Getter itemTypeCatId
     * @return {number}
     */
	public get itemTypeCatId(): number {
		return this._itemTypeCatId;
	}

    /**
     * Getter itemTransactionId
     * @return {number}
     */
	public get itemTransactionId(): number {
		return this._itemTransactionId;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter price
     * @return {number}
     */
	public get price(): number {
		return this._price;
	}

    /**
     * Getter originalPrice
     * @return {number}
     */
	public get originalPrice(): number {
		return this._originalPrice;
	}

    /**
     * Getter discount
     * @return {number}
     */
	public get discount(): number {
		return this._discount;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter fleetCost
     * @return {number}
     */
	public get fleetCost(): number {
		return this._fleetCost;
	}

    /**
     * Getter sizeId
     * @return {string}
     */
	public get sizeId(): string {
		return this._sizeId;
	}

    /**
     * Getter lastLevelCategoryId
     * @return {number}
     */
	public get lastLevelCategoryId(): number {
		return this._lastLevelCategoryId;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter statusId
     * @param {number} value
     */
	public set statusId(value: number) {
		this._statusId = value;
	}

    /**
     * Setter itemColorId
     * @param {number} value
     */
	public set itemColorId(value: number) {
		this._itemColorId = value;
	}

    /**
     * Setter itemTypeCatId
     * @param {number} value
     */
	public set itemTypeCatId(value: number) {
		this._itemTypeCatId = value;
	}

    /**
     * Setter itemTransactionId
     * @param {number} value
     */
	public set itemTransactionId(value: number) {
		this._itemTransactionId = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter price
     * @param {number} value
     */
	public set price(value: number) {
		this._price = value;
	}

    /**
     * Setter originalPrice
     * @param {number} value
     */
	public set originalPrice(value: number) {
		this._originalPrice = value;
	}

    /**
     * Setter discount
     * @param {number} value
     */
	public set discount(value: number) {
		this._discount = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter fleetCost
     * @param {number} value
     */
	public set fleetCost(value: number) {
		this._fleetCost = value;
	}

    /**
     * Setter sizeId
     * @param {string} value
     */
	public set sizeId(value: string) {
		this._sizeId = value;
	}

    /**
     * Setter lastLevelCategoryId
     * @param {number} value
     */
	public set lastLevelCategoryId(value: number) {
		this._lastLevelCategoryId = value;
	}

}