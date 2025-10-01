import { useParams } from 'react-router-dom';
import { getRecipeResource } from '../api/cache';
import RecipeHeader from './RecipeHeader';
import RecipeInfo from './RecipeInfo';
import RecipeIngredients from './RecipeIngredients';
import RecipeInstruction from './RecipeInstruction';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = getRecipeResource(Number(id)).read();
  return (
    <div className="flex flex-col gap-12 w-full justify-center py-25 px-50">
      <RecipeHeader
        title={recipe.name}
        difficulty={recipe.difficulty}
        tags={recipe.tags}
        src={recipe.image}
        prepTimeMinutes={recipe.prepTimeMinutes}
        cookTimeMinutes={recipe.cookTimeMinutes}
      />
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipeInstruction instructions={recipe.instructions} />
      <RecipeInfo
        mealType={recipe.mealType}
        caloriesPerServing={recipe.caloriesPerServing}
        rating={recipe.rating}
        cuisine={recipe.cuisine}
      />
    </div>
  );
}
