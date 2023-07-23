import { Component, Input } from '@angular/core';
import { Category } from 'src/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  @Input() categorie!: Category;
}
