
export class ItemTransactionHistoryJson {
    
    private id: number;
    private itemTransactionId: number;
    private action: string;
    private description: string;

	constructor() {
    }

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $itemTransactionId
     * @return {number}
     */
	public get $itemTransactionId(): number {
		return this.itemTransactionId;
	}

    /**
     * Getter $action
     * @return {string}
     */
	public get $action(): string {
		return this.action;
	}

    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $itemTransactionId
     * @param {number} value
     */
	public set $itemTransactionId(value: number) {
		this.itemTransactionId = value;
	}

    /**
     * Setter $action
     * @param {string} value
     */
	public set $action(value: string) {
		this.action = value;
	}

    /**
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}

}