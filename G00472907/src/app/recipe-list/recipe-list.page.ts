import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.page.html',
  styleUrls: ['./recipe-list.page.scss'],
  standalone: true,
  imports: [IonItem, IonImg, IonButton, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent,]
})
export class RecipeListPage  {
  constructor(private router: Router) {}

  @Input() recipes: any[] = [];
  @Output() select = new EventEmitter<any>();

  openRecipeDetailsPage(id: number) {
    this.router.navigate(['/recipe-details', id])
  }
}
