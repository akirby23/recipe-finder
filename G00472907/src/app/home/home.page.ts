import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic, heart, settingsOutline } from 'ionicons/icons';
import { MyHttp } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { environment } from '../environments/environment';
import { FavouriteRecipes } from '../services/favourite-recipes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonSearchbar],
})
export class HomePage {
  searchQuery: string;
  recipeData: any[] = [];

  options: HttpOptions = {
    url: 'https://spoonacular.com/food-api/docs#Search-Recipes-Complex',
    params: {
      apiKey: environment.apiKey,
    }
  }

  constructor(private mhs: MyHttp, private frs: FavouriteRecipes) {
    this.searchQuery = '';
  }

  async searchRecipes(event?: any) {
    try {
      if (event) this.searchQuery = event.detail.value;

      if (this.searchQuery) {
        this.options.params!['query'] = this.searchQuery;
        console.log(this.options.params)
      } 

      let result = await this.mhs.get(this.options);
      this.recipeData = result.data;
      console.log(this.recipeData);
    } catch (err) {
      console.error('Error fetching recipes:', err)
    }
  }
}
