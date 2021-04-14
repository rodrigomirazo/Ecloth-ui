// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: any = {
  production: false,
  server: "http://151.106.109.11",
  //host: "http://151.106.109.11:8081",
  host: "http://localhost:8081",
  baseUrl: "/ecommerce/bicicle/api/v1",
  indexPage: "http://localhost:4200/#/index",
  entity: {
    item: "/item",
    itemTransaction: "/itemTransaction",
    itemTransactionByStatus: "/itemTransaction/status",

    approvedOrRejected: "/approvedOrRejected",
    notYetApproved: "/notYetApproved",

    transactionService: "/service",
    transactionSent: "/sent",
    transactionReceive: "/receive",
    
    buyerTransaction: "/userBuyer",
    vendorTransaction: "/userVendor",
    
    filterItems: "/item/criteria",
    itemImage: "/item/uploadImg",
    getItemImage: "/item/uploadImg",
    itemBytesImage: "/item/image",
    itemDiagnost: "/item/diagnost",
    
    types: "/itemTypeCat",
    categoryType: "/itemCat",
    floatingChars: "/itemFloatingChars",
    floatingCharsCat: "/itemFloatingCharsCat",

    userAddres: "/userAddress",
    userAuth: "/user/authenticate",
    userTokenIsValid: "/user/profile/isValid",
    crossLogin: "/user/crossLogin",
    preRegister: "/user/preRegister",
    enableUser: "/user/enableUser",
    userUpdate: "/userUpdate",
    passwordUpdate: "/passwordUpdate",
    userFavorites: "/userFavorites",
    userAddFavorites: "/userAddFavorites",
    userRemoveFavorites: "/userRemoveFavorites",
  }
};
