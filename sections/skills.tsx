'use client';

import * as Icons from 'react-icons/si';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass-card';
import { SectionTitle } from '@/components/section-title';
import { Reveal } from '@/components/reveal';
import { skillsRow1, skillsRow2, type Skill } from '@/lib/data';

function SkillMarquee({ items, direction = 'left' }: { items: Skill[]; direction?: 'left' | 'right' }) {
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        className="flex min-w-max gap-4"
      >
        {[...items, ...items].map((skill, index) => {
          const Icon = Icons[skill.icon as keyof typeof Icons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

          return (
            <GlassCard
              key={`${skill.name}-${index}`}
              className="flex min-w-[190px] items-center gap-3 border-white/25 bg-white/40 py-4 dark:bg-zinc-900/40"
            >
              {Icon ? <Icon className="h-6 w-6" style={{ color: skill.color }} /> : null}
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">{skill.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  {skill.category}
                </p>
              </div>
            </GlassCard>
          );
        })}
      </motion.div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <Reveal>
          <SectionTitle
            eyebrow="Expertise Matrix"
            title="Immersive Engineering Toolkit"
            description="A cross-domain stack optimized for resilient architecture, rapid delivery, and premium experience quality."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SkillMarquee items={skillsRow1} direction="left" />
        </Reveal>
        <Reveal delay={0.2}>
          <SkillMarquee items={skillsRow2} direction="right" />
        </Reveal>
      </div>
    </section>
  );
}
