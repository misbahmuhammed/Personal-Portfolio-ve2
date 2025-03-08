import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building scalable web applications using .NET Core, Angular, and SQL Server.',
        'Developing RESTful APIs and microservices with a focus on performance and security.',
        'Implementing cloud integrations using Microsoft Azure, including Azure Service Bus and Functions.',
        'Creating responsive UIs using Angular, Blazor, Bootstrap, HTML5, CSS3, and TypeScript.',
        'Migrating monolithic applications to microservices for improved scalability and maintainability.',
        'Applying SOLID principles and design patterns to enhance code quality and maintainability.',
      ],
      softwareSkills: [
        // Languages/Frameworks
        { name: 'C#', icon: 'vscode-icons:file-type-csharp' },
        { name: '.NET Core', icon: 'vscode-icons:file-type-csproj' },
        { name: 'Entity Framework Core', icon: 'simple-icons:dotnet' },
        { name: 'Angular', icon: 'logos:angular-icon' },
        { name: 'Go', icon: 'logos:go' },
        { name: 'XUnit', icon: 'simple-icons:xunit' },

        // Front-End
        { name: 'Blazor', icon: 'logos:blazor' },
        { name: 'Bootstrap', icon: 'logos:bootstrap' },
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'jQuery', icon: 'logos:jquery' },

        // Cloud/DevOps
        { name: 'Microsoft Azure', icon: 'logos:azure-icon' },
        { name: 'GitHub Actions', icon: 'logos:github-actions' },
        { name: 'Docker', icon: 'logos:docker-icon' },

        // Databases
        { name: 'Microsoft SQL Server', icon: 'vscode-icons:file-type-sql' },
        { name: 'LINQ', icon: 'simple-icons:dotnet' },

        // Software Architecture
        { name: 'Microservices', icon: '/public/microservices.png' },
        { name: 'Design Patterns', icon: 'simple-icons:designpattern' },
        { name: 'SOLID Principles', icon: 'simple-icons:solid' },
        { name: 'Distributed Systems', icon: 'simple-icons:distributedsystems' },

        // APIs
        { name: 'RESTful APIs', icon: 'simple-icons:postman' },
        { name: 'GraphQL', icon: 'logos:graphql' },

        // Development Practices
        { name: 'Agile', icon: 'simple-icons:agile' },
        { name: 'Scrum', icon: 'simple-icons:scrum' },
        { name: 'CI/CD', icon: '/public/cicd.jpeg' },

        // Tools
        { name: 'Visual Studio', icon: 'logos:visual-studio' },
        { name: 'Swagger', icon: 'simple-icons:swagger' },
        { name: 'Postman', icon: 'simple-icons:postman' },
        { name: 'Jira', icon: 'logos:jira' },
        { name: 'Bitbucket', icon: 'logos:bitbucket' },
        { name: 'GitHub', icon: 'logos:github-icon' },
      ],
    },
  ],
};