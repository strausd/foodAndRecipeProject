import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs';

import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {RecipeService} from '../recipes/recipe.service';
import {AuthService} from '../auth/auth.service';
import {Recipe} from '../recipes/recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private slService: ShoppingListService,
              private authService: AuthService) {}

  // firebase uses put request to override data
  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-3a584.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-3a584.firebaseio.com/recipes.json?auth=' + token)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }

  storeShoppingList() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-3a584.firebaseio.com/shopping-list.json?auth=' + token, this.slService.getIngredients());
  }

  getShoppingList() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-3a584.firebaseio.com/shopping-list.json?auth=' + token)
      .subscribe((response: Response) => {
        const shoppingList: Ingredient[] = response.json();
        this.slService.setIngredients(shoppingList);
      })
  }
}
