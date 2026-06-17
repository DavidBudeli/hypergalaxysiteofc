import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="Hyper Galaxy">
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="19" cy="19" r="12.5" stroke="#8B5CF6" strokeWidth="2.5" />
        <path
          d="M5 27.2C16.2 36.6 31.7 37.5 38 29.1"
          stroke="#93C5FD"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M15 19H23.5M19.2 12.8V25.4"
          stroke="#F6F4EF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="grid leading-none">
        <span className="text-sm font-black uppercase tracking-[0.2em] text-[#F6F4EF]">
          Hyper
        </span>
        <span className="text-sm font-black uppercase tracking-[0.2em] text-[#B9BBC5]">
          Galaxy
        </span>
      </span>
    </div>
  );
}
