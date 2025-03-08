'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Misbah A, a Full Stack Developer with 1.8 years of experience in building scalable applications using{' '}
            <Link
              href="https://dotnet.microsoft.com/"
              target="_blank"
              className="text-accent"
            >
              .NET Core
            </Link>
            , Angular, and SQL Server. I specialize in developing RESTful APIs, microservices, and cloud integrations with Azure.
          </p>
          <p>
            Currently, I am working at{' '}
            <Link
              href="https://guidehouse.com/"
              target="_blank"
              className="text-accent"
            >
              Guidehouse
            </Link>
            , where I have been part of projects involving microservices transformation, and full-stack development.
          </p>
          <p>
            My main focus these days is expanding my skills in cloud services and enhancing my expertise in software architecture and security.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => {
                  const [category, skills] = item.split(": ");
                  return (
                    <li key={getId()} className="flex items-start gap-2">
                      {/* Custom bullet or icon */}
                      <span className="text-blue-500">•</span>
                      <div>
                        <strong>{category}:</strong> {skills}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
