import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStroageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn : 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataStroageService: DataStroageService, private recipeService: RecipeService){}
    
    resolve(route:  ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes =  this.recipeService.getRecipes();
        if(recipes.length <= 0){
            return this.dataStroageService.fetchRecipes();
        }
        return recipes;
    }
}