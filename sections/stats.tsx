import { Reveal } from '@/components/reveal';
import { GlassCard } from '@/components/glass-card';
import { stats } from '@/lib/data';

export function StatsSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <GlassCard tone="accent" className="h-full text-center">
              <p className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50">
                {item.value}
                <span className="text-cyan-500">{item.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{item.label}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
