
export function SkeletonPost(){
    return(
          <div className="h-[23%] w-full sm:w-[90%] xl:w-[60%] bg-white relative flex flex-col rounded-[5px] p-4 animate-pulse">

      {/* Breadcrumb */}
      <div className="flex flex-row items-center gap-4 mb-4">
        <div className="h-6 w-24 bg-gray-200 rounded"></div>
        <div className="h-6 w-6 bg-gray-200 rounded"></div>
        <div className="h-6 w-32 bg-gray-200 rounded"></div>
        <div className="h-6 w-6 bg-gray-200 rounded"></div>
        <div className="h-6 w-28 bg-gray-200 rounded"></div>
      </div>

      {/* Save button */}
      <div className="h-8 w-20 bg-gray-200 rounded self-end mb-4"></div>

      {/* Likes / Comments / Date */}
      <div className="flex flex-row justify-end gap-4 mb-6">
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
        <div className="h-6 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* Title */}
      <div className="h-10 w-[70%] bg-gray-200 rounded self-center mb-6"></div>

      {/* Image */}
      <div className="w-[85%] h-[300px] bg-gray-200 rounded self-center mb-6"></div>

      {/* Content */}
      <div className="flex flex-col gap-3 w-[85%] self-center">
        <div className="h-6 bg-gray-200 rounded"></div>
        <div className="h-6 bg-gray-200 rounded"></div>
        <div className="h-6 w-[80%] bg-gray-200 rounded"></div>
      </div>

      {/* Summary */}
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100 mt-8 gap-4 rounded-2xl">
        <div className="h-8 w-40 bg-gray-200 rounded"></div>
        <div className="h-6 w-[60%] bg-gray-200 rounded"></div>
        <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
      </div>

      {/* User Review */}
      <div className="flex flex-col items-center mt-8 gap-4">
        <div className="h-8 w-48 bg-gray-200 rounded"></div>

        <div className="flex items-center gap-4">
          <div className="h-14 w-14 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-48 bg-gray-200 rounded"></div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="h-6 w-40 bg-gray-200 rounded"></div>
          <div className="h-10 w-60 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Like */}
      <div className="flex justify-center mt-8">
        <div className="h-12 w-24 bg-gray-200 rounded"></div>
      </div>

    </div>
    )
}