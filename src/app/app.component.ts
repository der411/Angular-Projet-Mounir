import { Component } from '@angular/core';
import { Produit } from '../model/produit';
import { Category } from 'src/model/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  produits: Produit[] = [
    {
      id: 1,
      titre: 'Produit 1',
      description: 'Description 1',
      prix: 100,
      image: '../assets/images/img1.jpg',
    },
    {
      id: 2,
      titre: 'Produit 2',
      description: 'Description 2',
      prix: 200,
      image: '../assets/images/img2.jpg',
    },
    {
      id: 3,
      titre: 'Produit 3',
      description: 'Description 3',
      prix: 300,
      image: '../assets/images/img3.jpg',
    },
  ];

  categories: Category[] = [
    new Category(1, 'Categorie 1', 'url_to_categorie_image_1'),
    new Category(2, 'Categorie 2', 'url_to_categorie_image_2'),
    // Ajoutez plus de catégories ici
  ];
}
