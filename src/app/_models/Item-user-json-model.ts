
import { ItemFloatingCharRel } from './item-floating-char-rel';
import { ItemFloatingCharRelJson } from './item-floating-char-rel-json';
import { ItemImgUrlsJson } from './Item-img-urls-json-model';
import { User } from './Item-user';
import { UserJson } from './Item-user-json';

export class UserItemJson {

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
    private user: UserJson;
    private itemFloatingChars: ItemFloatingCharRelJson[];
    private itemImgUrls: ItemImgUrlsJson[];
    private backRear: string;
    private model: string;
    private year: number;
    private suspension: string;
    private ruedos: string;
    private cassette: string;
    private series: string;
    private gearLevel: string;
    private multiplication: string;
    private isModified: boolean;
    private comments: string;
    private frameRate: number;
    private ruedosRate: number;
    private wheelsRate: number;
    private componentsRate: number;

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
     * @return {UserJson}
     */
	public get $user(): UserJson {
		return this.user;
	}

    /**
     * Getter $itemFloatingChars
     * @return {ItemFloatingCharRelJson[]}
     */
	public get $itemFloatingChars(): ItemFloatingCharRelJson[] {
		return this.itemFloatingChars;
	}

    /**
     * Getter $itemImgUrls
     * @return {ItemImgUrlsJson[]}
     */
	public get $itemImgUrls(): ItemImgUrlsJson[] {
		return this.itemImgUrls;
	}

    /**
     * Getter $backRear
     * @return {string}
     */
	public get $backRear(): string {
		return this.backRear;
	}

    /**
     * Getter $model
     * @return {string}
     */
	public get $model(): string {
		return this.model;
	}

    /**
     * Getter $year
     * @return {number}
     */
	public get $year(): number {
		return this.year;
	}

    /**
     * Getter $suspension
     * @return {string}
     */
	public get $suspension(): string {
		return this.suspension;
	}

    /**
     * Getter $ruedos
     * @return {string}
     */
	public get $ruedos(): string {
		return this.ruedos;
	}

    /**
     * Getter $cassette
     * @return {string}
     */
	public get $cassette(): string {
		return this.cassette;
	}

    /**
     * Getter $series
     * @return {string}
     */
	public get $series(): string {
		return this.series;
	}

    /**
     * Getter $gearLevel
     * @return {string}
     */
	public get $gearLevel(): string {
		return this.gearLevel;
	}

    /**
     * Getter $multiplication
     * @return {string}
     */
	public get $multiplication(): string {
		return this.multiplication;
	}

    /**
     * Getter $isModified
     * @return {boolean}
     */
	public get $isModified(): boolean {
		return this.isModified;
	}

    /**
     * Getter $comments
     * @return {string}
     */
	public get $comments(): string {
		return this.comments;
	}

    /**
     * Getter $frameRate
     * @return {number}
     */
	public get $frameRate(): number {
		return this.frameRate;
	}

    /**
     * Getter $ruedosRate
     * @return {number}
     */
	public get $ruedosRate(): number {
		return this.ruedosRate;
	}

    /**
     * Getter $wheelsRate
     * @return {number}
     */
	public get $wheelsRate(): number {
		return this.wheelsRate;
	}

    /**
     * Getter $componentsRate
     * @return {number}
     */
	public get $componentsRate(): number {
		return this.componentsRate;
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
     * @param {UserJson} value
     */
	public set $user(value: UserJson) {
		this.user = value;
	}

    /**
     * Setter $itemFloatingChars
     * @param {ItemFloatingCharRelJson[]} value
     */
	public set $itemFloatingChars(value: ItemFloatingCharRelJson[]) {
		this.itemFloatingChars = value;
	}

    /**
     * Setter $itemImgUrls
     * @param {ItemImgUrlsJson[]} value
     */
	public set $itemImgUrls(value: ItemImgUrlsJson[]) {
		this.itemImgUrls = value;
	}

    /**
     * Setter $backRear
     * @param {string} value
     */
	public set $backRear(value: string) {
		this.backRear = value;
	}

    /**
     * Setter $model
     * @param {string} value
     */
	public set $model(value: string) {
		this.model = value;
	}

    /**
     * Setter $year
     * @param {number} value
     */
	public set $year(value: number) {
		this.year = value;
	}

    /**
     * Setter $suspension
     * @param {string} value
     */
	public set $suspension(value: string) {
		this.suspension = value;
	}

    /**
     * Setter $ruedos
     * @param {string} value
     */
	public set $ruedos(value: string) {
		this.ruedos = value;
	}

    /**
     * Setter $cassette
     * @param {string} value
     */
	public set $cassette(value: string) {
		this.cassette = value;
	}

    /**
     * Setter $series
     * @param {string} value
     */
	public set $series(value: string) {
		this.series = value;
	}

    /**
     * Setter $gearLevel
     * @param {string} value
     */
	public set $gearLevel(value: string) {
		this.gearLevel = value;
	}

    /**
     * Setter $multiplication
     * @param {string} value
     */
	public set $multiplication(value: string) {
		this.multiplication = value;
	}

    /**
     * Setter $isModified
     * @param {boolean} value
     */
	public set $isModified(value: boolean) {
		this.isModified = value;
	}

    /**
     * Setter $comments
     * @param {string} value
     */
	public set $comments(value: string) {
		this.comments = value;
	}

    /**
     * Setter $frameRate
     * @param {number} value
     */
	public set $frameRate(value: number) {
		this.frameRate = value;
	}

    /**
     * Setter $ruedosRate
     * @param {number} value
     */
	public set $ruedosRate(value: number) {
		this.ruedosRate = value;
	}

    /**
     * Setter $wheelsRate
     * @param {number} value
     */
	public set $wheelsRate(value: number) {
		this.wheelsRate = value;
	}

    /**
     * Setter $componentsRate
     * @param {number} value
     */
	public set $componentsRate(value: number) {
		this.componentsRate = value;
	}

}
