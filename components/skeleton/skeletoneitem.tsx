import { Skeleton } from "@/components/ui/skeleton"
export function SkeletonDemo() {
  return (
    <div className="w-[98%] sm:w-[90%] xl:w-[60%] h-[180px] sm:h-[220px] bg-white relative flex flex-row items-center justify-between rounded-[5px] animate-pulse">

      {/* Image */}
      <div className="w-[40%] sm:w-[30%] h-full relative rounded-[5px] bg-gray-200 overflow-hidden">
        {/* score */}
        <div className="w-[40px] h-[40px] sm:h-[55px] sm:w-[55px] xl:h-[60px] xl:w-[60px]
                        rounded-full bg-gray-300 absolute bottom-[5%] xl:bottom-[10%] right-[6%] z-20" />
      </div>

      {/* Content */}
      <div className="w-[55%] sm:w-[68%] h-[97%] flex flex-col justify-center">

        {/* title */}
        <div className="h-8 sm:h-10 w-[80%] bg-gray-200 rounded mb-3" />

        {/* description */}
        <div className="flex flex-col gap-2 mb-3">
          <div className="h-5 bg-gray-200 rounded" />
          <div className="h-5 w-[90%] bg-gray-200 rounded" />
        </div>

        {/* date */}
        <div className="h-4 w-[40%] bg-gray-200 rounded self-end mb-3" />

        {/* stats */}
        <div className="flex flex-row gap-[5%]">
          <div className="h-5 w-20 bg-gray-200 rounded" />
          <div className="h-5 w-20 bg-gray-200 rounded" />
          <div className="h-5 w-20 bg-gray-200 rounded" />
        </div>

      </div>

    </div>
  )
}