import { InputFilterYear } from './input-filter-years-model';
import { ItemFloatingChars } from './item-floating-char';
import { ItemCategoryModel } from './main-categories-model';

export class InputFilter {

    private _searchBar: string = "";
    private _years: InputFilterYear[] =[];
    private _itemFloatingChars: ItemFloatingChars[] = [];
    private _itemTypes: ItemCategoryModel[] = [];


	constructor(
        years?: InputFilterYear[],
        searchBar?: string,
        itemFloatingChars?: ItemFloatingChars[],
        itemTypes?: ItemCategoryModel[]) {
        
        if(years)
            this.years = years;
        
        if(searchBar)
            this.searchBar = searchBar;
        
        if(itemFloatingChars)
            this.itemFloatingChars = itemFloatingChars;
        
        if(itemTypes)
		    this.itemTypes = itemTypes;
    }


    /**
     * Getter searchBar
     * @return {string }
     */
	public get searchBar(): string  {
		return this._searchBar;
	}

    /**
     * Getter years
     * @return {InputFilterYear[] }
     */
	public get years(): InputFilterYear[]  {
		return this._years;
	}

    /**
     * Getter itemFloatingChars
     * @return {ItemFloatingChars[] }
     */
	public get itemFloatingChars(): ItemFloatingChars[]  {
		return this._itemFloatingChars;
	}

    /**
     * Getter itemTypes
     * @return {ItemCategoryModel[] }
     */
	public get itemTypes(): ItemCategoryModel[]  {
		return this._itemTypes;
	}

    /**
     * Setter searchBar
     * @param {string } value
     */
	public set searchBar(value: string ) {
		this._searchBar = value;
	}

    /**
     * Setter years
     * @param {InputFilterYear[] } value
     */
	public set years(value: InputFilterYear[] ) {
		this._years = value;
	}

    /**
     * Setter itemFloatingChars
     * @param {ItemFloatingChars[] } value
     */
	public set itemFloatingChars(value: ItemFloatingChars[] ) {
		this._itemFloatingChars = value;
	}

    /**
     * Setter itemTypes
     * @param {ItemCategoryModel[] } value
     */
	public set itemTypes(value: ItemCategoryModel[] ) {
		this._itemTypes = value;
	}

}