'use client';

import { Moon, Sun, LaptopMinimal } from 'lucide-react';
import { useTheme } from 'next-themes';

const themes = [
  { key: 'light', label: 'Light', icon: Sun },
  { key: 'dark', label: 'Dark', icon: Moon },
  { key: 'system', label: 'System', icon: LaptopMinimal }
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-xl dark:border-white/15 dark:bg-black/25">
      {themes.map((item) => {
        const Icon = item.icon;
        const active = theme === item.key;

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => setTheme(item.key)}
            aria-label={`Switch to ${item.label.toLowerCase()} theme`}
            className="rounded-full px-3 py-2 text-xs font-medium text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            data-active={active}
          >
            <span
              className="flex items-center gap-1.5 rounded-full px-2 py-1 data-[active=true]:bg-white data-[active=true]:text-zinc-950 data-[active=true]:shadow-sm dark:data-[active=true]:bg-zinc-900 dark:data-[active=true]:text-zinc-100"
              data-active={active}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden md:inline">{item.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
