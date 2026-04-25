'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { personal } from '@/lib/data';
import { GlassCard } from '@/components/glass-card';
import { ThemeToggle } from '@/components/theme-toggle';

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '26%']);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-8 sm:px-10 lg:px-16">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.22),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,.2),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,.14),transparent_40%)]"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">Portfolio 2026</p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-100">
              {personal.fullName}
            </h1>
            <p className="text-xl font-medium text-zinc-700 dark:text-zinc-300">{personal.role}</p>
            <div className="space-y-3 text-zinc-600 dark:text-zinc-300">
              {personal.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 dark:border-white/10">
                <MapPin className="h-4 w-4 text-cyan-500" />
                {personal.location}
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 transition hover:border-cyan-400/40 hover:text-cyan-500 dark:border-white/10"
              >
                <Mail className="h-4 w-4 text-cyan-500" />
                {personal.email}
              </a>
            </div>
          </GlassCard>

          <motion.div
            initial={{ opacity: 0, rotateY: -12, y: 24 }}
            animate={{ opacity: 1, rotateY: 0, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm [perspective:1400px]"
          >
            <div className="absolute -inset-7 rounded-[2rem] bg-gradient-to-tr from-cyan-500/30 to-indigo-500/30 blur-2xl" />
            <GlassCard className="relative overflow-hidden p-4 [transform:rotateY(-8deg)_rotateX(6deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)]">
              <Image
                src={personal.avatar}
                alt={personal.fullName}
                width={520}
                height={640}
                className="h-[460px] w-full rounded-2xl object-cover"
                priority
              />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
