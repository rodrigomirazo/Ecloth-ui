import { UserItemJson } from "./Item-json-model";
import { ItemTransactionHistory } from "./item-transaction-history-model";
import { ItemTransactionHistoryJson } from "./item-transaction-history-model-json";
import { UserAddressJson } from "./User-address-json-model";
import { UserAddress } from "./User-address-model";
import { User, UserJson } from '../_models/User-model';
import { UserItem } from "./Item-model";


export class ItemTransactionJson {
    private id: number = undefined;
    private item: UserItem;
    private userVendor: UserJson;
    private userBuyer: UserJson;
    private transactionStatus: string;
    private buyerAddress: UserAddressJson;
    private vendorAddress: UserAddressJson;
    private paymentMethod: string;
    private totalPayment: string;
    private trackingNumber: string;
    private rate: number;
    private itemTransactionHistory: ItemTransactionHistoryJson[];

	constructor() {
    }

    /**
     * Getter $id
     * @return {number }
     */
	public get $id(): number  {
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
     * @return {UserJson}
     */
	public get $userVendor(): UserJson {
		return this.userVendor;
	}

    /**
     * Getter $userBuyer
     * @return {UserJson}
     */
	public get $userBuyer(): UserJson {
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
     * @return {UserAddressJson}
     */
	public get $buyerAddress(): UserAddressJson {
		return this.buyerAddress;
	}

    /**
     * Getter $vendorAddress
     * @return {UserAddressJson}
     */
	public get $vendorAddress(): UserAddressJson {
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
     * @return {ItemTransactionHistoryJson[]}
     */
	public get $itemTransactionHistory(): ItemTransactionHistoryJson[] {
		return this.itemTransactionHistory;
	}

    /**
     * Setter $id
     * @param {number } value
     */
	public set $id(value: number ) {
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
     * @param {UserJson} value
     */
	public set $userVendor(value: UserJson) {
		this.userVendor = value;
	}

    /**
     * Setter $userBuyer
     * @param {UserJson} value
     */
	public set $userBuyer(value: UserJson) {
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
     * @param {UserAddressJson} value
     */
	public set $buyerAddress(value: UserAddressJson) {
		this.buyerAddress = value;
	}

    /**
     * Setter $vendorAddress
     * @param {UserAddressJson} value
     */
	public set $vendorAddress(value: UserAddressJson) {
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
     * @param {ItemTransactionHistoryJson[]} value
     */
	public set $itemTransactionHistory(value: ItemTransactionHistoryJson[]) {
		this.itemTransactionHistory = value;
	}

}
