import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton() {
  return (
    <SkeletonTheme
      baseColor="#151515"
      highlightColor="#444"
      borderRadius={5}
      className="w-[200px] md:w-[264px]"
    >
      <div className="flex flex-col">
        <div className="pb-2">
          <Skeleton className="h-[180px] md:h-[300px]" />
        </div>
        <div>
          <Skeleton count={1} height={30} />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default CardSkeleton;
