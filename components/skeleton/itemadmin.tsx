
export function LoadingItemAdmin(){

    return(
<div className="flex flex-row items-center p-2 sm:p-6 justify-between w-[80%] bg-white h-[80px] animate-pulse">
  
  {/* Left side */}
  <div className="flex flex-row items-center gap-[10px]">
    
    {/* Image skeleton */}
    <div className="relative w-[60px] sm:w-[90px] xl:w-[140px] h-[65px] bg-gray-200 rounded-[4px]" />

    {/* Title skeleton */}
    <div className="h-[22px] sm:h-[26px] lg:h-[32px] w-[120px] sm:w-[180px] lg:w-[260px] bg-gray-200 rounded" />
  </div>

  {/* Right side */}
  <div className="flex flex-row items-center gap-[10px] sm:gap-[15px] xl:gap-[30px]">
    
    {/* Icons skeleton */}
    <div className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] bg-gray-200 rounded-full" />
    <div className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] bg-gray-200 rounded-full" />

    {/* Views */}
    <div className="flex flex-row gap-[8px] items-center">
      <div className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] bg-gray-200 rounded-full" />
      <div className="w-[30px] h-[18px] bg-gray-200 rounded" />
    </div>

    {/* Date */}
    <div className="w-[70px] h-[18px] bg-gray-200 rounded" />
  </div>
</div>

       )
}