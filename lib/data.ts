export interface Skill {
  name: string;
  color: string;
  icon: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'devops' | 'cloud';
}

export const personal = {
  fullName: 'Harshit Pachori',
  role: 'Lead Full-Stack Architect',
  avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
  location: 'New Delhi, India',
  email: 'harshitpachori@gmail.com',
  bio: [
    "I'm a Full Stack Architect dedicated to building high-performance, scalable digital ecosystems.",
    'My expertise lies in bridging the gap between complex engineering requirements and elite design aesthetics.'
  ]
};

export const stats = [
  { label: 'Engineering Experience', value: '3', suffix: '+' },
  { label: 'Successful Projects', value: '20', suffix: '+' },
  { label: 'System Uptime', value: '99', suffix: '%' },
  { label: 'Design Precision', value: '100', suffix: '%' }
];

export const skills: Skill[] = [
  { name: 'Java', color: '#007396', icon: 'SiOpenjdk', category: 'language' },
  { name: 'TypeScript', color: '#3178C6', icon: 'SiTypescript', category: 'language' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'SiJavascript', category: 'language' },
  { name: 'Kotlin', color: '#7F52FF', icon: 'SiKotlin', category: 'language' },
  { name: 'C++', color: '#00599C', icon: 'SiCplusplus', category: 'language' },
  { name: 'Dart', color: '#0175C2', icon: 'SiDart', category: 'language' },
  { name: 'Python', color: '#3776AB', icon: 'SiPython', category: 'language' },
  { name: 'React', color: '#61DAFB', icon: 'SiReact', category: 'frontend' },
  { name: 'Next.js', color: '#ffffff', icon: 'SiNextdotjs', category: 'frontend' },
  { name: 'TailwindCSS', color: '#06B6D4', icon: 'SiTailwindcss', category: 'frontend' },
  { name: 'Redux', color: '#764ABC', icon: 'SiRedux', category: 'frontend' },
  { name: 'Flutter', color: '#54C5F8', icon: 'SiFlutter', category: 'frontend' },
  { name: 'Spring Boot', color: '#6DB33F', icon: 'SiSpringboot', category: 'backend' },
  { name: 'Node.js', color: '#339933', icon: 'SiNodedotjs', category: 'backend' },
  { name: 'Express', color: '#ffffff', icon: 'SiExpress', category: 'backend' },
  { name: 'MySQL', color: '#4479A1', icon: 'SiMysql', category: 'database' },
  { name: 'MongoDB', color: '#47A248', icon: 'SiMongodb', category: 'database' },
  { name: 'PostgreSQL', color: '#336791', icon: 'SiPostgresql', category: 'database' },
  { name: 'Firebase', color: '#FFCA28', icon: 'SiFirebase', category: 'database' },
  { name: 'Supabase', color: '#3ECF8E', icon: 'SiSupabase', category: 'database' },
  { name: 'Git', color: '#F05033', icon: 'SiGit', category: 'devops' },
  { name: 'Docker', color: '#2496ED', icon: 'SiDocker', category: 'devops' },
  { name: 'Linux', color: '#FCC624', icon: 'SiLinux', category: 'devops' },
  { name: 'Postman', color: '#FF6C37', icon: 'SiPostman', category: 'devops' },
  { name: 'Vercel', color: '#ffffff', icon: 'SiVercel', category: 'cloud' },
  { name: 'Cloudflare', color: '#F38020', icon: 'SiCloudflare', category: 'cloud' },
  { name: 'Netlify', color: '#00C7B7', icon: 'SiNetlify', category: 'cloud' }
];

export const skillsRow1 = skills.filter((skill) => ['language', 'frontend'].includes(skill.category));
export const skillsRow2 = skills.filter((skill) =>
  ['backend', 'database', 'devops', 'cloud'].includes(skill.category)
);

export const projects = [
  {
    title: 'Quantum Engine',
    description: 'A high-performance trading engine built with Spring Boot and React.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
    tech: ['Java', 'Spring Boot', 'React', 'Redis'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Neuro Dashboard',
    description: 'AI-driven analytics platform for neuroscientific data visualization.',
    image:
      'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2940&auto=format&fit=crop',
    tech: ['TypeScript', 'Next.js', 'D3.js', 'Python'],
    liveUrl: '#',
    githubUrl: '#'
  }
];
