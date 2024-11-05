const SkeletonCardProgram = ({ count }) => {
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
    <div className="w-full h-auto bg-blue-gray-50 rounded-lg">
      <div className="flex flex-col p-4 animate-pulse gap-6">
        <div className="flex gap-4">
          <div className="h-6 w-[100px] bg-blue-gray-100 rounded-lg" />
          <div className="h-6 w-[100px] bg-blue-gray-100 rounded-lg" />
          <div className="h-6 w-[100px] bg-blue-gray-100 rounded-lg" />
        </div>
        <div className="space-y-3 w-full">
          <div className="h-4 w-full bg-blue-gray-100 rounded-lg" />
          <div className="h-4 w-full bg-blue-gray-100 rounded-lg" />
        </div>
        <div className="flex w-full gap-6">
          <div className="min-h-24 min-w-24 bg-blue-gray-100 rounded-lg" />
          <div className="flex flex-col space-y-6 justify-center w-full">
            <div className="h-4 w-3/4 bg-blue-gray-100 rounded-lg" />
            <div className="flex flex-wrap gap-2">
              <div className="h-4 w-[75px] bg-blue-gray-100 rounded-lg" />
              <div className="h-4 w-[75px] bg-blue-gray-100 rounded-lg" />
              <div className="h-4 w-[75px] bg-blue-gray-100 rounded-lg" />
              <div className="h-4 w-[75px] bg-blue-gray-100 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardProgram;
