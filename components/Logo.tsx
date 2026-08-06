import { ArrowDown } from "lucide-react";

export default function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-green-500 to-green-700 ${className}`}
    >
      <ArrowDown className="h-[55%] w-[55%] stroke-[3] text-white" />
    </div>
  );
}
