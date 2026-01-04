import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { HttpOptions } from '@capacitor/core/types/core-plugins';

@Injectable({
  providedIn: 'root',
})

export class MyHttp {
  baseUrl = 'https://api.spoonacular.com/recipes'
  apiKey = environment.apiKey;
  
  constructor() {}

  async get(options: HttpOptions) {
    return await CapacitorHttp.get(options);
  }

  async searchRecipes(searchQuery?: string) {
    const options: HttpOptions = {
      url: `${this.baseUrl}/complexSearch`,
      params: {
        apiKey: environment.apiKey,
      }
    }

    if (searchQuery) {
      options.params!['query'] = searchQuery;
    }

    try {
      let result = await this.get(options);
      return result.data.results;
    } catch (err) {
      console.error('Error fetching recipes:', err);
    }
  }

  async getRecipeDetails(id: string) {
    const options: HttpOptions = {
      url: `${this.baseUrl}/${id}/information`,
      params: {
        apiKey: environment.apiKey
      }
    }

    try {
      let result = await this.get(options);
      return result.data;
    } catch (err) {
      console.error('Error fetching recipe details:', err);
    } 
  }
}
