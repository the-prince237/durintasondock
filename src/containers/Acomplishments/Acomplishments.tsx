import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../components/GlobalComponents';

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 1000, text: 'Students' },
  { number: 1900, text: 'Github Followers' },
  { number: 5000, text: 'Github Stars' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <div className='group mx-auto my-[24px] grid w-full max-w-[500px] grid-cols-2 gap-[10px] sm:m-boxes-sm sm:max-w-max sm:grid-cols-auto-fit sm:gap-[16px] md:m-boxes-md md:grid-cols-4 md:gap-[24px]'>
      {data.map((card, index) => (
        <div
          className='h-[110px] rounded-[12px] bg-[#212d45] p-[12px] even:row-[2] sm:h-[135px] sm:p-4 sm:even:row-auto md:h-[210px] md:p-[24px] lg:h-[144px]'
          key={index}
        >
          <h5 className='mb-[8px] text-[24px] font-[600] leading-[26px] tracking-widest text-white sm:text-[28px] sm:leading-[32px] md:text-[36px] md:leading-[40px]'>{`${card.number}+`}</h5>
          <p className='text-[10px] leading-[14px] tracking-wide text-transWhite00 sm:text-[16px] sm:leading-[20px] md:text-[18px] md:leading-[24px]'>
            {card.text}
          </p>
        </div>
      ))}
    </div>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
