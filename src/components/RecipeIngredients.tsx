interface RecipeIngredientsProps {
  ingredients: string[];
}

export default function RecipeIngredients({
  ingredients,
}: RecipeIngredientsProps) {
  return (
    <div className="flex flex-col gap-6 bg-muted p-4 rounded-2xl">
      <h2 className="text-2xl font-semibold">Ingredients</h2>
      <p className="break-words">{ingredients.join(', ')}</p>
    </div>
  );
}
