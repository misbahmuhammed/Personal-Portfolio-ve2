import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Misbah A.',
  tagline: 'I build scalable and secure web applications.',
  description:
    "I'm a passionate Full-Stack Developer with 1.11 years of experience in building scalable applications using .NET Core, Angular, and SQL Server. Skilled in developing RESTful APIs, microservices, and integrating cloud services with Azure. I also have experience in UI development with Blazor and Angular.",
  specialText: 'Open to remote, hybrid, and on-site opportunities',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

