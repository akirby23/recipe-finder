import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonImg, IonCardHeader, IonCardTitle, IonButton, IonIcon, IonText, IonCardContent, IonTitle, IonList, IonItem, IonListHeader, IonLabel} from '@ionic/angular/standalone';
import { MyHttp } from '../services/my-http.service';
import { ActivatedRoute } from '@angular/router';
import { HeadingComponent } from "../components/heading/heading.component";
import { Settings } from '../services/settings';
import { IonThumbnail } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonLabel, IonListHeader, IonItem, IonList, IonTitle, IonIcon, IonButton, IonCardTitle, IonImg, IonContent, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardContent, HeadingComponent, IonText]
})
export class RecipeDetailsPage implements OnInit {
  recipe: any;
  preferredMeasurementUnit: string | null = null;

  constructor(private mhs: MyHttp, private route: ActivatedRoute, private settings: Settings) { }

  async getRecipeDetails() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      try {
        this.recipe = await this.mhs.getRecipeDetails(id);
        console.log(this.recipe)
      } catch (err) {
        console.error('Error fetching recipe details:', err)
      }
    }
  }

  async getPreferredMeasurementUnit() {
    this.preferredMeasurementUnit = await this.settings.get('measurement', 'Metric');
  }

  ngOnInit() {
    this.getPreferredMeasurementUnit();
    this.getRecipeDetails();
  }
}
