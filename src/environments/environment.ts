// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host: "http://localhost:8081",
  baseUrl: "/ecommerce/bicicle/api/v1",
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
  }
};
