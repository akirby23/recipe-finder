import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, heartDislike, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({ heart, heartDislike, settingsOutline })
  }
}
