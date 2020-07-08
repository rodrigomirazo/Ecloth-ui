import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { CategoryService } from './category.service';
import { ItemCategoryModel } from '../models/main-categories-model';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.css']
})
export class CategoryTreeComponent {

  treeControl = new NestedTreeControl<ItemCategoryModel>(node => node.subCategories);
  dataSource = new MatTreeNestedDataSource<ItemCategoryModel>();

  constructor(private categoryService: CategoryService) {

    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      console.log("items: ", itemType);
      this.dataSource.data = itemType;
    });

  }

  hasChild = (_: number, node: ItemCategoryModel) => !!node.subCategories && node.subCategories.length > 0;

}
