interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <div className="px-3 py-1 h-6 flex items-center justify-center rounded-md border border-border text-xs flex-shrink-0">
      <span>{label}</span>
    </div>
  );
}
