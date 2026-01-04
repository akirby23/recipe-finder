import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonButton, IonIcon, IonList, IonItem, IonListHeader, IonLabel, IonToast } from '@ionic/angular/standalone';
import { MyHttp } from '../services/my-http.service';
import { ActivatedRoute } from '@angular/router';
import { HeadingComponent } from "../components/heading/heading.component";
import { Settings } from '../services/settings';
import { FavouriteRecipes } from '../services/favourite-recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonToast, IonLabel, IonListHeader, IonItem, IonList, IonIcon, IonButton, IonImg, IonContent, CommonModule, FormsModule, HeadingComponent,]
})
export class RecipeDetailsPage implements OnInit {
  recipe: any;
  preferredMeasurementUnit: string | null = null;
  favourited: boolean = false;

  constructor(
    private mhs: MyHttp, 
    private route: ActivatedRoute, 
    private settings: Settings,
    private storage: FavouriteRecipes,
  ) { }

  async getRecipeDetails() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      try {
        this.recipe = await this.mhs.getRecipeDetails(id);
        this.favourited = await this.isFavourited(this.recipe.id);
      } catch (err) {
        console.error('Error fetching recipe details:', err)
      }
    }
  }

  async getPreferredMeasurementUnit() {
    this.preferredMeasurementUnit = await this.settings.get('measurement', 'Metric');
  }

  async isFavourited(recipeId: string): Promise<boolean> {
    let favourites = await this.storage.get('favouriteRecipes', []);
    return favourites.some((favourite: any) => favourite.id === recipeId && favourite.favourited);
  }

  async toggleFavourite() {
    let favourites = await this.storage.get('favouriteRecipes', []);
    
    if (this.favourited) {
      let updatedFavourites = favourites.filter((favourite:any) => favourite.id !== this.recipe.id);
      await this.storage.set('favouriteRecipes', updatedFavourites);
    } else {
      let recipeToAdd = {...this.recipe, favourited: true};
      favourites.push(recipeToAdd);
      await this.storage.set('favouriteRecipes', favourites);
    }
    this.favourited = !this.favourited;
  }

  ngOnInit() {
    this.getPreferredMeasurementUnit();
    this.getRecipeDetails();
  }
}
