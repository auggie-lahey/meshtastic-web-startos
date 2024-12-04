import { cn } from "@app/core/utils/cn.ts";

export interface SubtleProps {
  className?: string;
  children: React.ReactNode;
}

export const Subtle = ({ className, children }: SubtleProps): JSX.Element => (
  <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)}>
    {children}
  </p>
);
