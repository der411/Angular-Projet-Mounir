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
      titre: 'Perruche',
      description: 'Description 1',
      prix: 359.99,
      image: '../assets/images/img1.jpg',
    },
    {
      id: 2,
      titre: 'Renard',
      description: 'Description 2',
      prix: 1245.75,
      image: '../assets/images/img2.jpg',
    },
    {
      id: 3,
      titre: 'Lézard',
      description: 'Description 3',
      prix: 299.99,
      image: '../assets/images/img3.jpg',
    },
  ];

  categories: Category[] = [
    {
      id:1,
      nom: "Oiseaux",
      image: '../assets/images/Oiseaux.jpg'
    },
    {
      id:2,
      nom: "Mammifères",
      image: '../assets/images/Mammifères.jpg'
    },
    {
      id:3,
      nom: "Reptiles",
      image: '../assets/images/Reptiles.jpg'
    }
  ];
}
