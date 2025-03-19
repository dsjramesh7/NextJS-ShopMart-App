import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Skeleton className="w-[500px] min-h-[500px] bg-black " />
    </div>
  );
};

export default loading;
