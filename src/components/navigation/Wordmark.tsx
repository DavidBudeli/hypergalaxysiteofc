import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex whitespace-nowrap pb-1 text-[13px] font-black uppercase leading-none tracking-[0.18em] text-[#F6F4EF] after:absolute after:bottom-0 after:left-0 after:h-px after:w-8 after:bg-[#8B5CF6] sm:text-sm sm:tracking-[0.21em]",
        className,
      )}
    >
      Hyper Galaxy
    </span>
  );
}
