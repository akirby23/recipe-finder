import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRadioGroup, IonRadio, IonItem } from '@ionic/angular/standalone';
import { Settings } from '../services/settings';
import { HeadingComponent } from '../components/heading/heading.component';

enum MeasurementOptions {
  Metric = 'Metric',
  US = 'US'
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  standalone: true,
  imports: [IonItem, IonRadio, IonRadioGroup, IonContent, CommonModule, FormsModule, HeadingComponent]
})

export class SettingsPage {
  measurementOptions = Object.values(MeasurementOptions);
  selectedMeasurement!: MeasurementOptions;

  constructor(private settings: Settings) {}

  async getMeasurementSettings() {
    this.selectedMeasurement = await this.settings.get(
      'measurement',
      MeasurementOptions.Metric // Sets Metric as the default option
    )
  }

  async changeMeasurementSettings(value: MeasurementOptions) {
    this.selectedMeasurement = value;
    await this.settings.set('measurement', value)
  }

  ngOnInit() {
    this.getMeasurementSettings();
  }
}
