import { useEffect, useState } from 'react';

import {
  type Recipe,
  type RecipesResponse,
  getRecipes,
} from '../api/getRecipes';
import Pagination from './Pagination';
import RecipeCard from './RecipeCard';

interface RecipeGridProps {
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function RecipeGrid({
  page,
  pageSize,
  onPageChange,
}: RecipeGridProps) {
  const [res, setRes] = useState<RecipesResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getRecipes(page, pageSize);
      setRes(res);
    };
    fetchData();
  }, [page, pageSize]);
  const totalPages = Math.max(1, Math.ceil((res?.total ?? 0) / pageSize));

  return (
    <div className="flex flex-col gap-6" aria-label="collection of recipes">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {res?.recipes.map((r: Recipe) => (
          <RecipeCard
            aria-label={`${r.name} recipe card`}
            key={r.id}
            id={r.id}
            title={r.name}
            difficulty={r.difficulty}
            src={r.image}
            tags={r.tags}
          />
        ))}
      </div>

      <div className="flex justify-center" aria-label="pagination">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
