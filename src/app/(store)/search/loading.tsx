import { Skeleton } from "@/components/skeleton";

export default function HomeLoading() {
  return (
    <div className="grid h-full max-h-215 grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-214" />
      <Skeleton className="col-span-6 row-span-6" />
      <Skeleton className="col-span-6 row-span-6" />
    </div>
  )
}