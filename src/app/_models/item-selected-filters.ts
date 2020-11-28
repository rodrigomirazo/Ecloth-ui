import { ItemFloatingCharsCat } from './item-floating-char-cat';

export class ItemSelectedFilters {

    private catId: number;
    private isSelected: boolean;
    private childrenIds: number[];

	constructor(catId?: number, isSelected?: boolean, childrenIds?: number[]) {

        if(catId)
            this.$catId = catId;
        if(isSelected)
            this.$isSelected = isSelected;
        if(childrenIds)
        this.$childrenIds = childrenIds;
    }

    /**
     * Getter $catId
     * @return {number}
     */
	public get $catId(): number {
		return this.catId;
	}

    /**
     * Getter $isSelected
     * @return {boolean}
     */
	public get $isSelected(): boolean {
		return this.isSelected;
	}

    /**
     * Getter $childrenIds
     * @return {number[]}
     */
	public get $childrenIds(): number[] {
		return this.childrenIds;
	}

    /**
     * Setter $catId
     * @param {number} value
     */
	public set $catId(value: number) {
		this.catId = value;
	}

    /**
     * Setter $isSelected
     * @param {boolean} value
     */
	public set $isSelected(value: boolean) {
		this.isSelected = value;
	}

    /**
     * Setter $childrenIds
     * @param {number[]} value
     */
	public set $childrenIds(value: number[]) {
		this.childrenIds = value;
	}

}