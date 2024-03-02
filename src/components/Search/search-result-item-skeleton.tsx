import { Skeleton } from "../ui/skeleton";

export function SkeletonResults() {
  return (
    <Skeleton
      className="bg-gray-900/15 gap-6 flex flex-col  gap-x-6 rounded-lg p-4"
      data-testid="skeleton"
    >
      <div className="flex gap-5">
        <Skeleton className="h-4 w-[200px] bg-gray-500"> </Skeleton>

        <Skeleton className="h-5 w-[150px] bg-gray-500"> </Skeleton>
      </div>

      <Skeleton className="h-4 w-[250px] bg-gray-500"> </Skeleton>
    </Skeleton>
  );
}
