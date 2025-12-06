import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss'],
  standalone: true,
  imports: [IonImg, IonButton, IonContent, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent,]
})
export class RecipeListPage implements OnInit {
  recipeTitle:string = "Recipe Title";

  constructor() { }

  ngOnInit() {
  }

}
