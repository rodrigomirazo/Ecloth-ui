import { InputFilterYear } from './input-filter-years-model';
import { ItemFloatingChars } from './item-floating-char';
import { ItemCategoryModel } from './main-categories-model';

export class InputFilter_header {

    private searchBar: string = "";
    private years: InputFilterYear[] =[];
    private itemFloatingChars: ItemFloatingChars[] = [];
    private itemTypes: ItemCategoryModel[] = [];


	constructor(
        years?: InputFilterYear[],
        searchBar?: string,
        itemFloatingChars?: ItemFloatingChars[],
        itemTypes?: ItemCategoryModel[]) {
        
        if(years)
            this.$years = years;
        
        if(searchBar)
            this.$searchBar = searchBar;
        
        if(itemFloatingChars)
            this.$itemFloatingChars = itemFloatingChars;
        
        if(itemTypes)
		    this.$itemTypes = itemTypes;
    }


    /**
     * Getter $searchBar
     * @return {string }
     */
	public get $searchBar(): string  {
		return this.searchBar;
	}

    /**
     * Getter $years
     * @return {InputFilterYear[] }
     */
	public get $years(): InputFilterYear[]  {
		return this.years;
	}

    /**
     * Getter $itemFloatingChars
     * @return {ItemFloatingChars[] }
     */
	public get $itemFloatingChars(): ItemFloatingChars[]  {
		return this.itemFloatingChars;
	}

    /**
     * Getter $itemTypes
     * @return {ItemCategoryModel[] }
     */
	public get $itemTypes(): ItemCategoryModel[]  {
		return this.itemTypes;
	}

    /**
     * Setter $searchBar
     * @param {string } value
     */
	public set $searchBar(value: string ) {
		this.searchBar = value;
	}

    /**
     * Setter $years
     * @param {InputFilterYear[] } value
     */
	public set $years(value: InputFilterYear[] ) {
		this.years = value;
	}

    /**
     * Setter $itemFloatingChars
     * @param {ItemFloatingChars[] } value
     */
	public set $itemFloatingChars(value: ItemFloatingChars[] ) {
		this.itemFloatingChars = value;
	}

    /**
     * Setter $itemTypes
     * @param {ItemCategoryModel[] } value
     */
	public set $itemTypes(value: ItemCategoryModel[] ) {
		this.itemTypes = value;
	}


}