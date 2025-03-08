import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Desk Seat Allocating Project',
      description: 'An internal application for employees to book workspaces in advance, optimizing seat allocation and utilization.',
      tasks:
        'Developed backend services using .NET Core Web API and integrated them with Angular for the frontend. Utilized Azure, Entity Framework Core, and SQL Server following a clean architecture approach.',
      url: '',
      img: '/seat.jpg', // Placeholder image since no public link is available
      tags: ['.NET Core', 'Angular', 'Azure', 'Entity Framework Core', 'SQL Server'],
    },
    {
      id: getId(),
      name: 'ACCIDENT-DETECTION-WITH-A-REPORTING-SYSTEM',
      description: 'A real-time accident detection system using deep learning to analyze CCTV footage and send alerts to the nearest control room.',
      tasks:
        'Built and trained deep learning models using VGG16 to classify video frames with 95% accuracy. Integrated Twilio API for alert notifications and deployed the system using Streamlit.',
      url: 'https://github.com/misbahmuhammed/Deep-Learning-Based-Road-Accident-Detection-And-Alert-System',
      img: '/accident.jpeg',
      tags: ['Python', 'Deep Learning', 'VGG16', 'Streamlit', 'Twilio API'],
    },
    {
      id: getId(),
      name: 'Campus E-Store Ecommerce Website',
      description: 'A web-based shopping system for the college store, allowing students and staff to purchase products online.',
      tasks:
        'Developed the website using Django with a focus on responsive design and seamless user experience. Implemented backend services and managed data with SQLite.',
      url: 'https://github.com/misbahmuhammed/Campus-E-Store-Ecommerce-Website-Django',
      img: '/school.png', // Placeholder image since no image link provided
      tags: ['Django', 'Python', 'SQLite', 'HTML', 'CSS'],
    },
  ],
  
};

export default featuredProjectsSection;
