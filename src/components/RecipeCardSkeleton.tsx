export default function RecipeCardSkeleton() {
  return (
    <div className="w-[330px] h-[270px] flex flex-col rounded-2xl overflow-hidden animate-pulse">
      <div className="w-full h-[150px] bg-gray-200" />
      <div className="flex flex-col bg-white gap-4 p-4 h-auto">
        <div className="flex justify-between items-center">
          <div className="h-6 w-2/3 bg-gray-200 rounded" />
          <div className="h-6 w-16 bg-gray-200 rounded" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-12 bg-gray-200 rounded-full" />
          <div className="h-6 w-12 bg-gray-200 rounded-full" />
          <div className="h-6 w-12 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
