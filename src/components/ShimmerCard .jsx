import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden">
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -468px 0;
          }
          100% {
            background-position: 468px 0;
          }
        }
        
        .shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
          background-size: 800px 104px;
        }
      `}</style>
      
      <div className="w-full h-48 bg-gray-300 shimmer"></div>
      
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded shimmer mb-3"></div>
        
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-4 h-4 bg-gray-300 rounded shimmer"></div>
          <div className="h-4 bg-gray-300 rounded shimmer w-32"></div>
        </div>
        
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-4 h-4 bg-gray-300 rounded shimmer"></div>
          <div className="h-4 bg-gray-300 rounded shimmer w-24"></div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-300 rounded shimmer"></div>
          <div className="h-3 bg-gray-300 rounded shimmer w-5/6"></div>
          <div className="h-3 bg-gray-300 rounded shimmer w-4/6"></div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-300 rounded shimmer w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded shimmer w-2/3"></div>
          <div className="h-3 bg-gray-300 rounded shimmer w-1/2"></div>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-300">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-gray-300 rounded shimmer"></div>
              <div className="h-4 bg-gray-300 rounded shimmer w-8"></div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-gray-300 rounded shimmer"></div>
              <div className="h-4 bg-gray-300 rounded shimmer w-8"></div>
            </div>
          </div>
          <div className="h-4 bg-gray-300 rounded shimmer w-20"></div>
        </div>
      </div>
    </div>
  );
};

const ShimmerGrid = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {Array.from({ length: count }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export { ShimmerCard, ShimmerGrid };
export default ShimmerCard;