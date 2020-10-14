
import { ItemFloatingCharRel } from './item-floating-char-rel';
import { User } from './Item-user';

export class UserItem {

    private id: string;
    private statusId: number;
    private itemColorId: number;
    private itemTypeCatId: number;
    private itemTransactionId: number;
    private name: string;
    private price: number;
    private originalPrice: number;
    private discount: number;
    private description: string;
    private fleetCost: number;
    private sizeId: string;
    private lastLevelCategoryId: number;
    private user: User;
    private itemFloatingChars: ItemFloatingCharRel[];

	constructor() {
    }

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $statusId
     * @return {number}
     */
	public get $statusId(): number {
		return this.statusId;
	}

    /**
     * Getter $itemColorId
     * @return {number}
     */
	public get $itemColorId(): number {
		return this.itemColorId;
	}

    /**
     * Getter $itemTypeCatId
     * @return {number}
     */
	public get $itemTypeCatId(): number {
		return this.itemTypeCatId;
	}

    /**
     * Getter $itemTransactionId
     * @return {number}
     */
	public get $itemTransactionId(): number {
		return this.itemTransactionId;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $price
     * @return {number}
     */
	public get $price(): number {
		return this.price;
	}

    /**
     * Getter $originalPrice
     * @return {number}
     */
	public get $originalPrice(): number {
		return this.originalPrice;
	}

    /**
     * Getter $discount
     * @return {number}
     */
	public get $discount(): number {
		return this.discount;
	}

    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Getter $fleetCost
     * @return {number}
     */
	public get $fleetCost(): number {
		return this.fleetCost;
	}

    /**
     * Getter $sizeId
     * @return {string}
     */
	public get $sizeId(): string {
		return this.sizeId;
	}

    /**
     * Getter $lastLevelCategoryId
     * @return {number}
     */
	public get $lastLevelCategoryId(): number {
		return this.lastLevelCategoryId;
	}

    /**
     * Getter $user
     * @return {User}
     */
	public get $user(): User {
		return this.user;
	}

    /**
     * Getter $itemFloatingChars
     * @return {ItemFloatingCharRel[]}
     */
	public get $itemFloatingChars(): ItemFloatingCharRel[] {
		return this.itemFloatingChars;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $statusId
     * @param {number} value
     */
	public set $statusId(value: number) {
		this.statusId = value;
	}

    /**
     * Setter $itemColorId
     * @param {number} value
     */
	public set $itemColorId(value: number) {
		this.itemColorId = value;
	}

    /**
     * Setter $itemTypeCatId
     * @param {number} value
     */
	public set $itemTypeCatId(value: number) {
		this.itemTypeCatId = value;
	}

    /**
     * Setter $itemTransactionId
     * @param {number} value
     */
	public set $itemTransactionId(value: number) {
		this.itemTransactionId = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $price
     * @param {number} value
     */
	public set $price(value: number) {
		this.price = value;
	}

    /**
     * Setter $originalPrice
     * @param {number} value
     */
	public set $originalPrice(value: number) {
		this.originalPrice = value;
	}

    /**
     * Setter $discount
     * @param {number} value
     */
	public set $discount(value: number) {
		this.discount = value;
	}

    /**
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}

    /**
     * Setter $fleetCost
     * @param {number} value
     */
	public set $fleetCost(value: number) {
		this.fleetCost = value;
	}

    /**
     * Setter $sizeId
     * @param {string} value
     */
	public set $sizeId(value: string) {
		this.sizeId = value;
	}

    /**
     * Setter $lastLevelCategoryId
     * @param {number} value
     */
	public set $lastLevelCategoryId(value: number) {
		this.lastLevelCategoryId = value;
	}

    /**
     * Setter $user
     * @param {User} value
     */
	public set $user(value: User) {
		this.user = value;
	}

    /**
     * Setter $itemFloatingChars
     * @param {ItemFloatingCharRel[]} value
     */
	public set $itemFloatingChars(value: ItemFloatingCharRel[]) {
		this.itemFloatingChars = value;
	}
    
}
