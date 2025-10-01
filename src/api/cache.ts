import { getRecipeDetail } from './getRecipeDetail';
import type { Recipe } from './getRecipes';
import { wrapPromise } from './utils';

const recipeCache = new Map<number, ReturnType<typeof wrapPromise<Recipe>>>();

export function getRecipeResource(id: number) {
  if (!recipeCache.has(id)) {
    recipeCache.set(id, wrapPromise(getRecipeDetail(id)));
  }
  return recipeCache.get(id)!;
}
