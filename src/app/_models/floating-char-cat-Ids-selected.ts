import { ItemFloatingCharsCat } from './item-floating-char-cat';

export class FloatingCharCatIdsSelected {

    private floatingCharCatId: number;
    private floatingCharCatSelected: boolean;
    
	constructor(floatingCharCatId?: number, floatingCharCatSelected?: boolean) {
        if(floatingCharCatId)
            this.$floatingCharCatId = floatingCharCatId;
        if(floatingCharCatSelected)
            this.$floatingCharCatSelected = floatingCharCatSelected;
    }

    /**
     * Getter $floatingCharCatId
     * @return {number}
     */
	public get $floatingCharCatId(): number {
		return this.floatingCharCatId;
	}

    /**
     * Getter $floatingCharCatSelected
     * @return {boolean}
     */
	public get $floatingCharCatSelected(): boolean {
		return this.floatingCharCatSelected;
	}

    /**
     * Setter $floatingCharCatId
     * @param {number} value
     */
	public set $floatingCharCatId(value: number) {
		this.floatingCharCatId = value;
	}

    /**
     * Setter $floatingCharCatSelected
     * @param {boolean} value
     */
	public set $floatingCharCatSelected(value: boolean) {
		this.floatingCharCatSelected = value;
	}

}