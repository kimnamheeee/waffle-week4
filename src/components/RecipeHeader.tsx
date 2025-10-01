import LazyImage from './LazyImage';
import Tag from './Tag';

interface RecipeHeaderProps {
  title: string;
  difficulty: string;
  tags: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  src: string;
}

export default function RecipeHeader({
  title,
  difficulty,
  tags,
  prepTimeMinutes,
  cookTimeMinutes,
  src,
}: RecipeHeaderProps) {
  return (
    <div className="flex gap-6 w-full">
      <LazyImage
        src={src}
        alt={title}
        width={242}
        height={242}
        className="rounded-lg"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex gap-12 items-end">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-accent-foreground">{difficulty}</p>
          </div>
          <div className="flex gap-4 flex-col">
            <p className="font-semibold">
              total {prepTimeMinutes + cookTimeMinutes} minutes needed
            </p>
            <div className="flex flex-col gap-2">
              <p>prep time {prepTimeMinutes} minutes</p>
              <p>cook time {cookTimeMinutes} minutes</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
