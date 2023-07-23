import { Component, Input } from '@angular/core';
import { Produit } from 'src/model/produit';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() produit!: Produit;
}
