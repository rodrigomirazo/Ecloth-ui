// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: any = {
  production: false,
  server: "https://www.baawvps.host",
  host: "https://www.baawvps.host:8081",
  baseUrl: "/ecommerce/bicicle/api/v1",
  indexPage: "http://seminuevos.baaw.mx/#/index",
  uploadedImgDir: "/uploadedItemImg/",
  paypalClientId: "AWhu68252p7sL_ruxAHa4Kj-lBN5ZdEkfo_D7DsMcLTvmSi5ssAuNXw3x3yaL3t_YVwoH1OQVmdt5kU8",
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
    user: "/user",
    
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
