export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export type RecipesResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

export async function getRecipes(
  page = 1,
  limit = 12
): Promise<RecipesResponse> {
  const skip = Math.max(0, (page - 1) * limit);
  const url = `https://dummyjson.com/recipes?limit=${encodeURIComponent(String(limit))}&skip=${encodeURIComponent(String(skip))}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch recipes: ${response.status} ${response.statusText}`
    );
  }
  const data = (await response.json()) as RecipesResponse;
  return data;
}
