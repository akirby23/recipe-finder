import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeadingComponent } from '../components/heading/heading.component';
import { FavouriteRecipes } from '../services/favourite-recipes.service';
import { RecipeListPage } from "../recipe-list/recipe-list.page";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeadingComponent, RecipeListPage]
})
export class FavouritesPage implements OnInit {
  favourites: any[] = [];

  constructor(private storage: FavouriteRecipes) { }

  async getFavourites() {
    let result = await this.storage.get('favouriteRecipes', []);
    this.favourites = result;
    return result;
  }

    ngOnInit() {
      this.getFavourites();
  }
}
