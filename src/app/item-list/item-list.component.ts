import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/Item-model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  // IO
  //@Input() categoryId: number;
  private _categoryId: number;

  private items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.get(this.categoryId).subscribe((itemsResp: Item[]) => {
      this.items = itemsResp;
    });
  }

  /** Handle Events for Item Category */
  @Input()
	public get categoryId(): number {
		return this._categoryId;
	}
	public set categoryId(value: number) {
    this._categoryId = value;
    
    this.itemService.get(this._categoryId).subscribe((itemsResp: Item[]) => {
      console.log();
      this.items = itemsResp;
    });
		
	}

}
