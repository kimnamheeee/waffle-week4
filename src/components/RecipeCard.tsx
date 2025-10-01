import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import Tag from './Tag';

interface RecipeCardProps {
  id: number;
  title: string;
  difficulty: string;
  tags: string[];
  src: string;
}

export default function RecipeCard({
  id,
  title,
  difficulty,
  tags,
  src,
}: RecipeCardProps) {
  return (
    <Link
      to={`/recipe/${id}`}
      className="w-[330px] flex flex-col rounded-2xl overflow-hidden cursor-pointer"
    >
      <LazyImage src={src} alt={title} width={330} height={150} />
      <div className="flex flex-col bg-white gap-4 p-4 flex-1">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold line-clamp-1">{title}</h1>
          <p className="text-sm text-accent-foreground">{difficulty}</p>
        </div>
        <div className="flex gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
