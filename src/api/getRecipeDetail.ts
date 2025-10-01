import type { Recipe } from './getRecipes';

export async function getRecipeDetail(id: number): Promise<Recipe> {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch recipe detail: ${response.status} ${response.statusText}`
    );
  }
  const data = (await response.json()) as Recipe;
  return data;
}
