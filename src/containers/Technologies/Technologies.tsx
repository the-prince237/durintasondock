import React from 'react';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../components/GlobalComponents';
import { items } from './data';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Ive worked with a range a technologies in the web development world. From Back-end To Design
    </SectionText>
    <ul className='my-[32px] flex list-none flex-col gap-[24px] sm:my-[64px] lg:my-[3rem] lg:grid lg:grid-cols-3 lg:gap-[40px]'>
      {items.map(({ Icon, title, description }, index) => (
        <li
          key={title + index}
          className='mb-[14px] flex max-w-[320px] flex-row sm:mb-0 sm:max-w-[203px] md:max-w-[320px] md:flex-col'
        >
          <picture>
            <Icon size='3rem' />
          </picture>
          <div className='ml-[18px] flex flex-col sm:ml-0'>
            <h4 className='mb-[4px] text-[20px] font-[700] leading-[28px] tracking-wide text-white sm:text-[24px] md:mb-[8px] md:text-[28px] md:leading-[32px]'>
              {title}
            </h4>
            <p className='text-[14px] leading-[22px] text-transWhite00 sm:text-[16px] sm:leading-[28px] md:text-[18px] md:leading-[30px]'>
              Experience with <br />
              {description}
            </p>
          </div>
        </li>
      ))}
    </ul>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
