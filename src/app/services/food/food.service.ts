import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAll() {
    return [
      '/assets/images/food/food-1',
      '/assets/images/food/food-2',
      '/assets/images/food/food-3',
      '/assets/images/food/food-4',
      '/assets/images/food/food-5',
      '/assets/images/food/food-6',
    ];
  }
}
