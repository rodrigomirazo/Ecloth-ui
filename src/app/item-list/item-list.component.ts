import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item-model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  private items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.get().subscribe((itemsResp: Item[]) => {
      this.items = itemsResp;
    });
  }

}
