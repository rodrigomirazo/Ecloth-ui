
import { ItemFloatingCharRel } from './item-floating-char-rel';
import { ItemImgUrls } from './Item-img-urls-model';
import { User } from './Item-user';

export class UserItem {

    private _id: string;
    private _statusId: number;
    private _itemColorId: number;
    private _itemTypeCatId: number;
    private _itemTransactionId: number;
    private _name: string;
    private _price: number;
    private _originalPrice: number;
    private _discount: number;
    private _description: string;
    private _fleetCost: number;
    private _sizeId: string;
    private _lastLevelCategoryId: number;
    private _user: User;
    private _itemFloatingChars: ItemFloatingCharRel[];
    private _itemImgUrls: ItemImgUrls[];
    private _backRear: string;
    private _frontRear: string;
    private _model: string;
    private _year: number;
    private _suspension: string;
    private _ruedos: string;
    private _cassette: string;
    private _series: string;
    private _gearLevel: string;
    private _multiplication: string;
    private _isModified: boolean;
    private _comments: string;
    private _frameRate: number;
    private _ruedosRate: number;
    private _wheelsRate: number;
    private _componentsRate: number;

	constructor() {
        this._user = new User();
    }

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter statusId
     * @return {number}
     */
	public get statusId(): number {
		return this._statusId;
	}

    /**
     * Getter itemColorId
     * @return {number}
     */
	public get itemColorId(): number {
		return this._itemColorId;
	}

    /**
     * Getter itemTypeCatId
     * @return {number}
     */
	public get itemTypeCatId(): number {
		return this._itemTypeCatId;
	}

    /**
     * Getter itemTransactionId
     * @return {number}
     */
	public get itemTransactionId(): number {
		return this._itemTransactionId;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter price
     * @return {number}
     */
	public get price(): number {
		return this._price;
	}

    /**
     * Getter originalPrice
     * @return {number}
     */
	public get originalPrice(): number {
		return this._originalPrice;
	}

    /**
     * Getter discount
     * @return {number}
     */
	public get discount(): number {
		return this._discount;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter fleetCost
     * @return {number}
     */
	public get fleetCost(): number {
		return this._fleetCost;
	}

    /**
     * Getter sizeId
     * @return {string}
     */
	public get sizeId(): string {
		return this._sizeId;
	}

    /**
     * Getter lastLevelCategoryId
     * @return {number}
     */
	public get lastLevelCategoryId(): number {
		return this._lastLevelCategoryId;
	}

    /**
     * Getter user
     * @return {User}
     */
	public get user(): User {
		return this._user;
	}

    /**
     * Getter itemFloatingChars
     * @return {ItemFloatingCharRel[]}
     */
	public get itemFloatingChars(): ItemFloatingCharRel[] {
		return this._itemFloatingChars;
	}

    /**
     * Getter itemImgUrls
     * @return {ItemImgUrls[]}
     */
	public get itemImgUrls(): ItemImgUrls[] {
		return this._itemImgUrls;
	}

    /**
     * Getter backRear
     * @return {string}
     */
	public get backRear(): string {
		return this._backRear;
	}

    /**
     * Getter frontRear
     * @return {string}
     */
	public get frontRear(): string {
		return this._frontRear;
	}

    /**
     * Getter model
     * @return {string}
     */
	public get model(): string {
		return this._model;
	}

    /**
     * Getter year
     * @return {number}
     */
	public get year(): number {
		return this._year;
	}

    /**
     * Getter suspension
     * @return {string}
     */
	public get suspension(): string {
		return this._suspension;
	}

    /**
     * Getter ruedos
     * @return {string}
     */
	public get ruedos(): string {
		return this._ruedos;
	}

    /**
     * Getter cassette
     * @return {string}
     */
	public get cassette(): string {
		return this._cassette;
	}

    /**
     * Getter series
     * @return {string}
     */
	public get series(): string {
		return this._series;
	}

    /**
     * Getter gearLevel
     * @return {string}
     */
	public get gearLevel(): string {
		return this._gearLevel;
	}

    /**
     * Getter multiplication
     * @return {string}
     */
	public get multiplication(): string {
		return this._multiplication;
	}

    /**
     * Getter isModified
     * @return {boolean}
     */
	public get isModified(): boolean {
		return this._isModified;
	}

    /**
     * Getter comments
     * @return {string}
     */
	public get comments(): string {
		return this._comments;
	}

    /**
     * Getter frameRate
     * @return {number}
     */
	public get frameRate(): number {
		return this._frameRate;
	}

    /**
     * Getter ruedosRate
     * @return {number}
     */
	public get ruedosRate(): number {
		return this._ruedosRate;
	}

    /**
     * Getter wheelsRate
     * @return {number}
     */
	public get wheelsRate(): number {
		return this._wheelsRate;
	}

    /**
     * Getter componentsRate
     * @return {number}
     */
	public get componentsRate(): number {
		return this._componentsRate;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter statusId
     * @param {number} value
     */
	public set statusId(value: number) {
		this._statusId = value;
	}

    /**
     * Setter itemColorId
     * @param {number} value
     */
	public set itemColorId(value: number) {
		this._itemColorId = value;
	}

    /**
     * Setter itemTypeCatId
     * @param {number} value
     */
	public set itemTypeCatId(value: number) {
		this._itemTypeCatId = value;
	}

    /**
     * Setter itemTransactionId
     * @param {number} value
     */
	public set itemTransactionId(value: number) {
		this._itemTransactionId = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter price
     * @param {number} value
     */
	public set price(value: number) {
		this._price = value;
	}

    /**
     * Setter originalPrice
     * @param {number} value
     */
	public set originalPrice(value: number) {
		this._originalPrice = value;
	}

    /**
     * Setter discount
     * @param {number} value
     */
	public set discount(value: number) {
		this._discount = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter fleetCost
     * @param {number} value
     */
	public set fleetCost(value: number) {
		this._fleetCost = value;
	}

    /**
     * Setter sizeId
     * @param {string} value
     */
	public set sizeId(value: string) {
		this._sizeId = value;
	}

    /**
     * Setter lastLevelCategoryId
     * @param {number} value
     */
	public set lastLevelCategoryId(value: number) {
		this._lastLevelCategoryId = value;
	}

    /**
     * Setter user
     * @param {User} value
     */
	public set user(value: User) {
		this._user = value;
	}

    /**
     * Setter itemFloatingChars
     * @param {ItemFloatingCharRel[]} value
     */
	public set itemFloatingChars(value: ItemFloatingCharRel[]) {
		this._itemFloatingChars = value;
	}

    /**
     * Setter itemImgUrls
     * @param {ItemImgUrls[]} value
     */
	public set itemImgUrls(value: ItemImgUrls[]) {
		this._itemImgUrls = value;
	}

    /**
     * Setter backRear
     * @param {string} value
     */
	public set backRear(value: string) {
		this._backRear = value;
	}

    /**
     * Setter frontRear
     * @param {string} value
     */
	public set frontRear(value: string) {
		this._frontRear = value;
	}

    /**
     * Setter model
     * @param {string} value
     */
	public set model(value: string) {
		this._model = value;
	}

    /**
     * Setter year
     * @param {number} value
     */
	public set year(value: number) {
		this._year = value;
	}

    /**
     * Setter suspension
     * @param {string} value
     */
	public set suspension(value: string) {
		this._suspension = value;
	}

    /**
     * Setter ruedos
     * @param {string} value
     */
	public set ruedos(value: string) {
		this._ruedos = value;
	}

    /**
     * Setter cassette
     * @param {string} value
     */
	public set cassette(value: string) {
		this._cassette = value;
	}

    /**
     * Setter series
     * @param {string} value
     */
	public set series(value: string) {
		this._series = value;
	}

    /**
     * Setter gearLevel
     * @param {string} value
     */
	public set gearLevel(value: string) {
		this._gearLevel = value;
	}

    /**
     * Setter multiplication
     * @param {string} value
     */
	public set multiplication(value: string) {
		this._multiplication = value;
	}

    /**
     * Setter isModified
     * @param {boolean} value
     */
	public set isModified(value: boolean) {
		this._isModified = value;
	}

    /**
     * Setter comments
     * @param {string} value
     */
	public set comments(value: string) {
		this._comments = value;
	}

    /**
     * Setter frameRate
     * @param {number} value
     */
	public set frameRate(value: number) {
		this._frameRate = value;
	}

    /**
     * Setter ruedosRate
     * @param {number} value
     */
	public set ruedosRate(value: number) {
		this._ruedosRate = value;
	}

    /**
     * Setter wheelsRate
     * @param {number} value
     */
	public set wheelsRate(value: number) {
		this._wheelsRate = value;
	}

    /**
     * Setter componentsRate
     * @param {number} value
     */
	public set componentsRate(value: number) {
		this._componentsRate = value;
	}
    

}
