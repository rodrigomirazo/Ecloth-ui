import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecloth-ui';
  categoryId: number;

  onCategoryId(categoryId: number) {
    this.categoryId = categoryId;
  }
}
