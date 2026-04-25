import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'rounded-2xl border p-6 shadow-[0_20px_80px_-30px_rgba(34,211,238,0.45)] backdrop-blur-xl transition duration-300',
  {
    variants: {
      tone: {
        default: 'border-white/15 bg-white/60 dark:border-white/10 dark:bg-zinc-900/50',
        accent: 'border-cyan-400/30 bg-cyan-400/10 dark:border-cyan-300/30 dark:bg-cyan-500/10'
      }
    },
    defaultVariants: {
      tone: 'default'
    }
  }
);

type GlassCardProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;

export function GlassCard({ className, tone, ...props }: GlassCardProps) {
  return <div className={cn(cardVariants({ tone }), className)} {...props} />;
}
