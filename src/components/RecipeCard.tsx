import Tag from './Tag';

interface RecipeCardProps {
  title: string;
  difficulty: string;
  tags: string[];
  src: string;
}

export default function RecipeCard({
  title,
  difficulty,
  tags,
  src,
}: RecipeCardProps) {
  return (
    <div className="w-[330px] h-[270px] flex flex-col rounded-2xl overflow-hidden">
      <img src={src} alt={title} className="w-full h-full object-cover " />
      <div className="flex flex-col bg-white gap-4 p-4 h-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-sm text-accent-foreground">{difficulty}</p>
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
