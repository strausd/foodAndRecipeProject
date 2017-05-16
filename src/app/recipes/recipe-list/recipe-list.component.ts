import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Test description', 'http://assets.kraftfoods.com/recipe_images/opendeploy/133446_640x428.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

}
