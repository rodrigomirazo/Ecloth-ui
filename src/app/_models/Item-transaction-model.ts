import { UserItem } from "./Item-model";
import { ItemTransactionHistory } from "./item-transaction-history-model";
import { UserAddress } from "./User-address-model";
import { User } from "./User-model";

export class ItemTransaction {

    private id: number;
    private item: UserItem;
    private userVendor: User;
    private userBuyer: User;
    private transactionStatus: string;
    private buyerAddress: UserAddress;
    private vendorAddress: UserAddress;
    private paymentMethod: string;
    private totalPayment: string;
    private trackingNumber: string;
    private rate: number;
    private itemTransactionHistory: ItemTransactionHistory[];

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
     * Getter $item
     * @return {UserItem}
     */
	public get $item(): UserItem {
		return this.item;
	}

    /**
     * Getter $userVendor
     * @return {User}
     */
	public get $userVendor(): User {
		return this.userVendor;
	}

    /**
     * Getter $userBuyer
     * @return {User}
     */
	public get $userBuyer(): User {
		return this.userBuyer;
	}

    /**
     * Getter $transactionStatus
     * @return {string}
     */
	public get $transactionStatus(): string {
		return this.transactionStatus;
	}

    /**
     * Getter $buyerAddress
     * @return {UserAddress}
     */
	public get $buyerAddress(): UserAddress {
		return this.buyerAddress;
	}

    /**
     * Getter $vendorAddress
     * @return {UserAddress}
     */
	public get $vendorAddress(): UserAddress {
		return this.vendorAddress;
	}

    /**
     * Getter $paymentMethod
     * @return {string}
     */
	public get $paymentMethod(): string {
		return this.paymentMethod;
	}

    /**
     * Getter $totalPayment
     * @return {string}
     */
	public get $totalPayment(): string {
		return this.totalPayment;
	}

    /**
     * Getter $trackingNumber
     * @return {string}
     */
	public get $trackingNumber(): string {
		return this.trackingNumber;
	}

    /**
     * Getter $rate
     * @return {number}
     */
	public get $rate(): number {
		return this.rate;
	}

    /**
     * Getter $itemTransactionHistory
     * @return {ItemTransactionHistory[]}
     */
	public get $itemTransactionHistory(): ItemTransactionHistory[] {
		return this.itemTransactionHistory;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $item
     * @param {UserItem} value
     */
	public set $item(value: UserItem) {
		this.item = value;
	}

    /**
     * Setter $userVendor
     * @param {User} value
     */
	public set $userVendor(value: User) {
		this.userVendor = value;
	}

    /**
     * Setter $userBuyer
     * @param {User} value
     */
	public set $userBuyer(value: User) {
		this.userBuyer = value;
	}

    /**
     * Setter $transactionStatus
     * @param {string} value
     */
	public set $transactionStatus(value: string) {
		this.transactionStatus = value;
	}

    /**
     * Setter $buyerAddress
     * @param {UserAddress} value
     */
	public set $buyerAddress(value: UserAddress) {
		this.buyerAddress = value;
	}

    /**
     * Setter $vendorAddress
     * @param {UserAddress} value
     */
	public set $vendorAddress(value: UserAddress) {
		this.vendorAddress = value;
	}

    /**
     * Setter $paymentMethod
     * @param {string} value
     */
	public set $paymentMethod(value: string) {
		this.paymentMethod = value;
	}

    /**
     * Setter $totalPayment
     * @param {string} value
     */
	public set $totalPayment(value: string) {
		this.totalPayment = value;
	}

    /**
     * Setter $trackingNumber
     * @param {string} value
     */
	public set $trackingNumber(value: string) {
		this.trackingNumber = value;
	}

    /**
     * Setter $rate
     * @param {number} value
     */
	public set $rate(value: number) {
		this.rate = value;
	}

    /**
     * Setter $itemTransactionHistory
     * @param {ItemTransactionHistory[]} value
     */
	public set $itemTransactionHistory(value: ItemTransactionHistory[]) {
		this.itemTransactionHistory = value;
	}

}
