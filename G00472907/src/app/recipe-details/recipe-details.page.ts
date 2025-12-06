import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonImg, IonCardHeader, IonCardTitle, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCardTitle, IonImg, IonContent, CommonModule, FormsModule, IonCard, IonCardHeader,]
})
export class RecipeDetailsPage implements OnInit {
  ingredient:string = "Ingredient";
  quantity:string = "Quantity";

  constructor() { }

  ngOnInit() {
  }

}
