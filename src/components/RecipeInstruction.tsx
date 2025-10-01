interface RecipeInstructionProps {
  instructions: string[];
}

export default function RecipeInstruction({
  instructions,
}: RecipeInstructionProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Instructions</h2>
      <ul className="flex flex-col gap-4">
        {instructions.map((instruction, i) => (
          <li key={instruction}>
            {i + 1}. {instruction}
          </li>
        ))}
      </ul>
    </div>
  );
}
