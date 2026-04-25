'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import { SectionTitle } from '@/components/section-title';
import { GlassCard } from '@/components/glass-card';
import { Reveal } from '@/components/reveal';

export function ProjectsSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <Reveal>
          <SectionTitle
            eyebrow="Flagship Builds"
            title="Future-Ready Products"
            description="Interactive case studies engineered for performance, visual intelligence, and long-term scale."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <motion.article whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 200, damping: 16 }}>
                <GlassCard className="group overflow-hidden p-0">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                  <div className="space-y-4 p-6">
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-700 dark:text-cyan-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-2 text-sm text-zinc-700 transition hover:border-cyan-500/40 hover:text-cyan-500 dark:text-zinc-300"
                        href={project.liveUrl}
                      >
                        Live Preview <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-2 text-sm text-zinc-700 transition hover:border-cyan-500/40 hover:text-cyan-500 dark:text-zinc-300"
                        href={project.githubUrl}
                      >
                        Repository <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
