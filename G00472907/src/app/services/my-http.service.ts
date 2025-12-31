import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { environment } from '../environments/environment'
import { HttpOptions } from '@capacitor/core/types/core-plugins';

@Injectable({
  providedIn: 'root',
})

export class MyHttp {
  apiKey = environment.apiKey;
  
  constructor() {}

  async get(options: HttpOptions) {
    return await CapacitorHttp.get(options);
  }
}
