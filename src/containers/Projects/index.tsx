import React from 'react';

import { ExternalLink } from './components';
import { Section, SectionDivider, SectionTitle } from '../../components/GlobalComponents';
import { projects } from '../../constants/constants';
import Image from 'next/image';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <section className='flex grid-cols-auto-fill flex-col gap-x-[2rem] gap-y-[3rem] p-[2rem] pb-0 sm:grid sm:p-[3rem]'>
      {projects.map((p, i) => {
        return (
          <div
            className='w-full rounded-[10px] text-center drop-shadow-BlogCard sm:w-[400px]'
            key={i}
          >
            <Image
              className='w-full overflow-hidden'
              style={{ objectFit: 'cover' }}
              src={p.image}
              alt={p.title}
            />
            <div className='z-20 w-full text-center'>
              <h3 className='py-[.5rem] text-[3rem] font-[500] tracking-[2px] text-[#9cc9e3]'>
                {p.title}
              </h3>
              <hr className='mx-auto my-[20px] h-[3px] w-[50px] border-0 bg-[#d0bb57]' />
            </div>
            <p className='w-full p-[3rem] text-justify text-[2rem] leading-[24px] text-[#e4e6e7] sm:px-[50px] sm:py-0'>
              {p.description}
            </p>
            <div>
              <div className='z-20 w-full text-center'>Stack</div>
              <ul className='flex justify-around p-[2rem]'>
                {p.tags.map((t, i) => {
                  return (
                    <li className='text-[1.5rem] text-[#d8dfbf]' key={i}>
                      {t}
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className='my-[2.5rem] flex list-none justify-around p-0'>
              <ExternalLink href={p.visit} title='Code' />
              <ExternalLink href={p.source} title='Source' />
            </ul>
          </div>
        );
      })}
    </section>
  </Section>
);

export default Projects;
