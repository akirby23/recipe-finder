import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonSearchbar, IonItem } from '@ionic/angular/standalone';
import { MyHttp } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { FavouriteRecipes } from '../services/favourite-recipes.service';
import { RecipeListPage } from "../recipe-list/recipe-list.page";
import { HeadingComponent } from "../components/heading/heading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonSearchbar, RecipeListPage, HeadingComponent],
})
export class HomePage {
  searchQuery: string = '';
  recipeData: any[] = [];

  constructor(private mhs: MyHttp) {
  }

  async searchRecipes(event?: any) {
    if (event) {
      this.searchQuery = event.detail.value;
    }

    if (!this.searchQuery) return;

    try {
      this.recipeData = await this.mhs.searchRecipes(this.searchQuery);
      console.log(this.recipeData)
    } catch (err) {
      console.error('Error fetching recipes:', err);
      this.recipeData = [];
    }
  }
}
