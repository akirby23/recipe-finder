import { Component } from '@angular/core';
import { IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { MyHttp } from '../../services/my-http.service';
import { RecipeListPage } from "../recipe-list/recipe-list.page";
import { HeadingComponent } from "../../components/heading/heading.component";

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
    } catch (err) {
      console.error('Error fetching recipes:', err);
      this.recipeData = [];
    }
  }
}
