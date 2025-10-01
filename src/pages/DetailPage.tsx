import { lazy } from 'react';

const RecipeDetail = lazy(() => import('../components/RecipeDetail'));

export default function DetailPage() {
  return <RecipeDetail />;
}
