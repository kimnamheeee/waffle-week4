interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <div className="px-3 py-1 size-auto flex items-center justify-center rounded-md border text-xs">
      <span>{label}</span>
    </div>
  );
}
