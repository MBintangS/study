import React from "react";

const SkeletonCardArticle = ({count}) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="w-full h-40 bg-blue-gray-50 rounded-lg">
      <div className="flex p-4 items-center animate-pulse gap-6">
        <div className="h-32 w-52 bg-blue-gray-100 rounded-lg" />
        <div className="space-y-8 w-full">
          <div className="space-y-3">
            <div className="h-4 w-full bg-blue-gray-100 rounded-lg" />
            <div className="h-4 w-full bg-blue-gray-100 rounded-lg" />
          </div>
          <div className="h-4 w-[150px] bg-blue-gray-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardArticle;
