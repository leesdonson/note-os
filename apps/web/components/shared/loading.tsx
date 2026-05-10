import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
export const Loading = ({
  text,
  classname,
}: {
  text?: string;
  classname?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-center p-4", classname)}>
      <Loader className="animate-spin w-8 h-8 text-neutral-500" />
      {text && <span className="ml-2 text-neutral-500">{text}</span>}
    </div>
  );
};
