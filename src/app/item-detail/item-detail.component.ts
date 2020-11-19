import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FloatingCharsService } from '../floating-chars/floating-chars.service';
import { ItemService } from '../item-list/item.service';
import { ItemFloatingChars } from '../models/item-floating-char';
import { ItemFloatingCharsCat } from '../models/item-floating-char-cat';
import { ItemFloatingCharRel } from '../models/item-floating-char-rel';
import { UserItem } from '../models/Item-user-model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  private item: UserItem;
  private itemFloatingChars: ItemFloatingChars[];

  constructor(private itemService: ItemService, private route: ActivatedRoute, private floatingCharsService: FloatingCharsService) {
    
  }

  ngOnInit() {

    //floating chars
    this.floatingCharsService.getAll().subscribe( (itemFloatingChars: ItemFloatingChars[]) => {
      this.itemFloatingChars = itemFloatingChars;

      //uri params
      this.route.params.subscribe(params => {
        if(params.itemId) {
          console.log(params);

          //item
          this.itemService.getById(params.itemId).subscribe( (itemResponse: UserItem) => {


              this.item = itemResponse;
              console.log(this.item);

              if(this.item.itemFloatingChars) {
                for (let j = 0; j < this.item.itemFloatingChars.length; j++) {
                  //console.log(this.items[i].itemFloatingChars[j]);
    
                  // a) find "Float Char"
                  let floatChar: ItemFloatingChars[] = itemFloatingChars.filter(floatChar => floatChar.floatingCharId == this.item.itemFloatingChars[j].floatingCharId );
                  // b) find "Float Char Value"
                  let floatCharCat: ItemFloatingCharsCat[] = [];
    
                  // c) verify if Char was found
                  if(floatChar.length > 0 && this.item.itemFloatingChars[j].floatingCharCatId) {
                    //console.log("\n floatChar.length", floatChar[0].catalogList, " VS ", itemsResp[i].itemFloatingChars[j].floatingCharsCatId);
                    floatCharCat = floatChar[0].catalogList.filter(floatCatChar => floatCatChar.charId == this.item.itemFloatingChars[j].floatingCharCatId );
                  }
                  
                  //console.log("floatCharCat: ", floatCharCat[0], floatChar[0]);
                  // d) assign using validations
                  this.item.itemFloatingChars[j].floatingCharName = (floatChar.length > 0) ? floatChar[0].floatingCharName : "N/A";
                  this.item.itemFloatingChars[j].floatingCharCatName = (floatCharCat.length > 0) ? floatCharCat[0].charName : "N/A";
                }
                console.log(this.item);
              }

          });
        }

      });
    });
  }

  filterCatalog(floatingCharName: string, itemFloatingChars: ItemFloatingCharRel[]): string {

    if(!itemFloatingChars) {
      return "NA";
    }
    let charFiltered: ItemFloatingCharRel[]  =
    itemFloatingChars.filter( floatChar => floatChar.floatingCharName == floatingCharName);

    if(charFiltered.length > 0) {
      return charFiltered[0].floatingCharCatName;
    } else {
      return "NA";
    }
  }
}
