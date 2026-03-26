import { cn } from '@/lib/utils';

export const StatusIndicator = ({ className }: { className?: string }) => {
  return (
    <div className={cn("inline-flex items-center gap-3 px-4 py-2 bg-white/50 border border-border rounded-full backdrop-blur-sm shadow-sm transition-all hover:bg-white hover:border-primary/50 cursor-default", className)}>
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </div>
      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
        Available for Collaboration
      </span>
    </div>
  );
};
