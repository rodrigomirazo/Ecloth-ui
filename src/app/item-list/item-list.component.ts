import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserItem } from '../models/Item-user-model';
import { ItemService } from './item.service';
import {MatAccordion} from '@angular/material/expansion';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  // IO
  //@Input() categoryId: number;
  private _categoryId: number;

  private items: UserItem[];

  constructor(
    private itemService: ItemService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
    this.matIconRegistry.addSvgIcon("star_inactive",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/market-place/icon_star_inactive.svg") );
    
    this.matIconRegistry.addSvgIcon("star_active",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/market-place/icon_star_active.svg") );
    
  }

  ngOnInit() {
    this.itemService.get(this.categoryId).subscribe((itemsResp: UserItem[]) => {
      this.items = itemsResp;
      console.log(this.items);
    });
  }

  /** Handle Events for Item Category */
  @Input()
	public get categoryId(): number {
		return this._categoryId;
	}
	public set categoryId(value: number) {
    this._categoryId = value;
    
    this.itemService.get(this._categoryId).subscribe((itemsResp: UserItem[]) => {
      console.log();
      this.items = itemsResp;
    });
		
  }
  
}
