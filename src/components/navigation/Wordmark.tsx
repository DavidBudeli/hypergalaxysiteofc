import Image from "next/image";

import { cn } from "@/lib/cn";

export function Wordmark({
  className,
  variant = "dark",
  priority = false,
}: {
  className?: string;
  variant?: "dark" | "light";
  priority?: boolean;
}) {
  return (
    <Image
      src={`/assets/brand/logo-horizontal-${variant}.svg`}
      alt="Hyper Galaxy"
      width={799}
      height={144}
      className={cn("h-auto w-[132px] sm:w-[150px] lg:w-[168px]", className)}
      priority={priority}
      unoptimized
    />
  );
}
