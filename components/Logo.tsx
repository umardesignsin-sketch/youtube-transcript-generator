export default function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-500 ${className}`}
    >
      <div className="flex flex-col gap-[3px]">
        <span className="h-[3px] w-4 rounded-full bg-white" />
        <span className="h-[3px] w-3 rounded-full bg-white" />
        <span className="h-[3px] w-3.5 rounded-full bg-white" />
      </div>
    </div>
  );
}
