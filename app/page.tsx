import { HeroSection } from '@/sections/hero';
import { StatsSection } from '@/sections/stats';
import { SkillsSection } from '@/sections/skills';
import { ProjectsSection } from '@/sections/projects';
import { ContactSection } from '@/sections/contact';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-[#07090f] dark:text-zinc-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.8),transparent_50%)] dark:bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_45%)]" />
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
