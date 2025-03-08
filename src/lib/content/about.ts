import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      "Languages/Frameworks: C#, Go (basics), .NET Core 8.0, ASP.NET Web API, MVC, Entity Framework Core, Angular (17+), XUnit",
      "Front-End: Angular, Blazor, Bootstrap, HTML5, CSS3, JavaScript, TypeScript, jQuery",
      "Cloud/DevOps: Microsoft Azure (Service Bus, Functions), GitHub Actions, Docker",
      "Databases: Microsoft SQL Server, LINQ",
      "Software Architecture: Microservices, Design Patterns, SOLID Principles, Distributed Systems",
      "APIs: RESTful APIs, GraphQL (Basics)",
      "Development Practices: Agile, Scrum, CI/CD",
      "Tools: Visual Studio, Swagger, Postman, Jira, Bitbucket, GitHub",
    ],
  },
  img: '/misbah-a.jpg',
};
