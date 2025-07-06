const InfiniteScrollLoader = () => {
  return (
<div className="flex justify-center items-center py-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-gray-600 rounded-full animate-spin animation-delay-75"></div>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
        </div>
        <p className="text-sm text-gray-600 font-medium">Loading more artworks...</p>
      </div>
    </div>
  );
};

export default InfiniteScrollLoader;