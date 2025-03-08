import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Guidehouse',
      companyUrl: 'https://guidehouse.com/',
      role: 'Software Engineer',
      started: 'August 2023',
      upto: 'Present',
      tasks: [
        'Developed and maintained scalable applications using .NET Core 8.0, C#, and Angular (17+).',
        'Engineered full-stack solutions integrating Angular, Blazor, and implemented RESTful APIs for efficient communication.',
        'Migrated monolithic apps to microservices, enhancing scalability and maintainability.',
        'Converted stored procedures into C# LINQ, boosting performance by 20%.',
        'Utilized Azure Service Bus for messaging and Azure Functions for serverless computing.',
        'Ensured code quality with SOLID principles and design patterns.',
        'Built responsive UIs using Angular, Blazor, Bootstrap, HTML5, CSS3, and TypeScript.',
        'Enhanced security with JWT authentication and Okta integration.',
        'Gained foundational knowledge in CI/CD (GitHub Actions), Docker, and Kubernetes.',
        'Actively contributed in Agile/Scrum processes and conducted KT sessions for junior developers.',
        'Received the Q4 GEM Award for contributions and innovation.',
      ],
    },
  ],  
};
