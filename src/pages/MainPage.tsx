import { lazy, useState } from 'react';

const RecipeGrid = lazy(() => import('../components/RecipeGrid'));

export default function MainPage() {
  const [page, setPage] = useState(1);
  const pageSize = 12;

  return (
    <div className="flex py-20 justify-center items-center">
      <RecipeGrid page={page} pageSize={pageSize} onPageChange={setPage} />
    </div>
  );
}
