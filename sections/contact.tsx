import { ArrowRight } from 'lucide-react';
import { GlassCard } from '@/components/glass-card';
import { personal } from '@/lib/data';
import { Reveal } from '@/components/reveal';

export function ContactSection() {
  return (
    <section className="px-6 pb-24 pt-20 sm:px-10 lg:px-16">
      <Reveal>
        <div className="mx-auto max-w-5xl">
          <GlassCard className="relative overflow-hidden border-cyan-300/30 bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-transparent p-10 text-center">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <p className="relative text-xs uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-200">Let&apos;s collaborate</p>
            <h2 className="relative mt-3 text-balance text-3xl font-semibold text-zinc-900 sm:text-4xl dark:text-zinc-100">
              Building digital experiences that feel premium, perform flawlessly, and scale with confidence.
            </h2>
            <a
              href={`mailto:${personal.email}`}
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-cyan-300 dark:text-zinc-950"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </GlassCard>
        </div>
      </Reveal>
    </section>
  );
}
