interface RecipeInfoProps {
  mealType: string[];
  caloriesPerServing: number;
  rating: number;
  cuisine: string;
}

export default function RecipeInfo({
  mealType,
  caloriesPerServing,
  rating,
  cuisine,
}: RecipeInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Info</h2>
      <ul className="flex gap-4 flex-col">
        <li>
          <p>cuisine: {cuisine}</p>
        </li>
        <li>
          <p>meal type: {mealType.join(', ')}</p>
        </li>
        <li>
          <p>calories: {caloriesPerServing} calories</p>
        </li>
        <li>
          <p>rating: {rating}</p>
        </li>
      </ul>
    </div>
  );
}
