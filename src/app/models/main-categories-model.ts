
export class ItemCategoryModel {

    private _id: number;
    private _itemTypeId: number;
    private _subCategoryLevel: number;
    private _parentId: number;
    private _categoryName: string;
    private _subCategoryName: string;
    private _subCategoryNameEsp: string;
    private _subCategories: ItemCategoryModel[];
    
    constructor() {}
    
    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter itemTypeId
     * @return {number}
     */
	public get itemTypeId(): number {
		return this._itemTypeId;
	}

    /**
     * Getter subCategoryLevel
     * @return {number}
     */
	public get subCategoryLevel(): number {
		return this._subCategoryLevel;
	}

    /**
     * Getter parentId
     * @return {number}
     */
	public get parentId(): number {
		return this._parentId;
	}

    /**
     * Getter categoryName
     * @return {string}
     */
	public get categoryName(): string {
		return this._categoryName;
	}

    /**
     * Getter subCategoryName
     * @return {string}
     */
	public get subCategoryName(): string {
		return this._subCategoryName;
	}

    /**
     * Getter subCategoryNameEsp
     * @return {string}
     */
	public get subCategoryNameEsp(): string {
		return this._subCategoryNameEsp;
	}

    /**
     * Getter subCategories
     * @return {ItemCategoryModel[]}
     */
	public get subCategories(): ItemCategoryModel[] {
		return this._subCategories;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter itemTypeId
     * @param {number} value
     */
	public set itemTypeId(value: number) {
		this._itemTypeId = value;
	}

    /**
     * Setter subCategoryLevel
     * @param {number} value
     */
	public set subCategoryLevel(value: number) {
		this._subCategoryLevel = value;
	}

    /**
     * Setter parentId
     * @param {number} value
     */
	public set parentId(value: number) {
		this._parentId = value;
	}

    /**
     * Setter categoryName
     * @param {string} value
     */
	public set categoryName(value: string) {
		this._categoryName = value;
	}

    /**
     * Setter subCategoryName
     * @param {string} value
     */
	public set subCategoryName(value: string) {
		this._subCategoryName = value;
	}

    /**
     * Setter subCategoryNameEsp
     * @param {string} value
     */
	public set subCategoryNameEsp(value: string) {
		this._subCategoryNameEsp = value;
	}

    /**
     * Setter subCategories
     * @param {ItemCategoryModel[]} value
     */
	public set subCategories(value: ItemCategoryModel[]) {
		this._subCategories = value;
	}

}