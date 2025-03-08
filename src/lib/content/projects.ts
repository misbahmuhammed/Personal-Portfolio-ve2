import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Desk Seat Allocating System',
      url: '',
      repo: '',
      img: '/desk.jpg',  // Dummy image
      year: 2023,
      tags: ['.NET Core', 'Angular', 'Azure', 'SQL Server'],  
    },
    {
      id: getId(),
      name: 'Accident Detection System',
      url: 'https://github.com/misbahmuhammed/Deep-Learning-Based-Road-Accident-Detection-And-Alert-System',
      repo: 'https://github.com/misbahmuhammed/Deep-Learning-Based-Road-Accident-Detection-And-Alert-System',
      img: '/accident.jpeg',  // Replace with actual image if different
      year: 2023,
      tags: ['Python', 'Deep Learning', 'Streamlit', 'Twilio API'],
    },
    {
      id: getId(),
      name: 'Campus E-Store',
      url: 'https://github.com/misbahmuhammed/Campus-E-Store-Ecommerce-Website-Django',
      repo: 'https://github.com/misbahmuhammed/Campus-E-Store-Ecommerce-Website-Django',
      img: '/Campus.jpeg',  // Replace with actual image if different     
      year: 2022,
      tags: ['Django', 'Python', 'SQLite', 'HTML', 'CSS'],
    },
    {
      id: getId(),
      name: 'Portfolio Website',
      url: 'https://myportfoliove2.netlify.app/',
      repo: '',
      img: '/Portfolio.jpeg',  // Dummy image
      year: 2023,
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'ToDo App',
      url: '',
      repo: '',
      img: '/todo.png',  // Dummy image
      year: 2022,
      tags: ['React', 'TypeScript', 'CSS'],
    },
 
  ],
};

