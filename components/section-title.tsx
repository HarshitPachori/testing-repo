import { cn } from '@/lib/utils';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ eyebrow, title, description, align = 'left' }: SectionTitleProps) {
  return (
    <div className={cn('space-y-4', align === 'center' && 'text-center')}>
      <p className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description ? <p className="text-base text-zinc-600 dark:text-zinc-300">{description}</p> : null}
    </div>
  );
}
