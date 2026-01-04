import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,],
})
export class HeadingComponent {

  constructor(private router: Router) {};

  // Reroutes to the home page
  navigatetoHomePage() {
    this.router.navigate(['/home']);
  }

  // Reroutes to the favourites page
  navigatetoFavouritesPage() {
    this.router.navigate(['/favourites']);
  }

  // Reroutes to the settings page
  navigatetoSettingsPage() {
    this.router.navigate(['/settings']);
  }

}
