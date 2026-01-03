import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class Settings {
  constructor(private storage: Storage) {
      this.init();
    }
  
    async init() {
      const storage = await this.storage.create();
    }

    async get(key: string, defaultOption: any) {
      let value = await this.storage.get(key);
      return value ?? defaultOption;
    }
  
    async set(key:string, value:any) {
      await this.storage.set(key, value);
    }
}
