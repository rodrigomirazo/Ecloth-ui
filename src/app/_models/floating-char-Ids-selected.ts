import { FloatingCharCatIdsSelected } from './floating-char-cat-Ids-selected';
import { ItemFloatingCharsCat } from './item-floating-char-cat';

export class FloatingCharIdsSelected {

    private floatingCharId: number;
    private floatingCharCatIdsSelected: FloatingCharCatIdsSelected[];
    
	constructor(floatingCharId?: number, floatingCharCatIdsSelected?: FloatingCharCatIdsSelected[]) {
        if(floatingCharId)
            this.$floatingCharId = floatingCharId;
        if(floatingCharCatIdsSelected)
            this.$floatingCharCatIdsSelected = floatingCharCatIdsSelected;
    }


    /**
     * Getter $floatingCharId
     * @return {number}
     */
	public get $floatingCharId(): number {
		return this.floatingCharId;
	}

    /**
     * Getter $floatingCharCatIdsSelected
     * @return {FloatingCharCatIdsSelected[]}
     */
	public get $floatingCharCatIdsSelected(): FloatingCharCatIdsSelected[] {
		return this.floatingCharCatIdsSelected;
	}

    /**
     * Setter $floatingCharId
     * @param {number} value
     */
	public set $floatingCharId(value: number) {
		this.floatingCharId = value;
	}

    /**
     * Setter $floatingCharCatIdsSelected
     * @param {FloatingCharCatIdsSelected[]} value
     */
	public set $floatingCharCatIdsSelected(value: FloatingCharCatIdsSelected[]) {
		this.floatingCharCatIdsSelected = value;
	}


}