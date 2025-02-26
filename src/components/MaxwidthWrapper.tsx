import type { ReactNode } from "react";
import { cn } from "../lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-screen-xl px-3 md:px-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;