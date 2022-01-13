import { ItemFloatingChars } from './item-floating-char';
import { ItemCategoryModel } from './main-categories-model';

export class InputFilterYear {

    private year: number;
    private isSelected: boolean;
    

	constructor($year: number, $selected: boolean) {
		this.year = $year;
		this.isSelected = $selected;
    }
    
    /**
     * Getter $year
     * @return {number}
     */
	public get $year(): number {
		return this.year;
	}

    /**
     * Getter $isSelected
     * @return {boolean}
     */
	public get $selected(): boolean {
		return this.isSelected;
	}

    /**
     * Setter $year
     * @param {number} value
     */
	public set $year(value: number) {
		this.year = value;
	}

    /**
     * Setter $isSelected
     * @param {boolean} value
     */
	public set $selected(value: boolean) {
		this.isSelected = value;
	}

}