// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host: "http://31.220.108.148:8081",
  baseUrl: "/ecommerce/bicicle/api/v1",
  indexPage: "http://localhost:4200/#/index",
  entity: {
    item: "/item",
    filterItems: "/item/criteria",
    itemImage: "/item/uploadImg",
    getItemImage: "/item/uploadImg",
    itemBytesImage: "/item/image",
    
    
    types: "/itemTypeCat",
    categoryType: "/itemCat",
    floatingChars: "/itemFloatingChars",
    floatingCharsCat: "/itemFloatingCharsCat",

    userAuth: "/user/authenticate",
    userTokenIsValid: "/user/profile/isValid"
  }
};
