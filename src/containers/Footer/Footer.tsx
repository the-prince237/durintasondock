import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcon } from '../Header/components';
import { socialLinks } from '../Header/data';
import Link from 'next/link';

const Footer = () => {
  const listItems: { title: string; href: string; label: string }[] = [
    {
      title: 'Call',
      href: 'tel:314-343-3432',
      label: '314-343-3432',
    },
    {
      title: 'Email',
      href: 'mailto:contact@jsmastery.com',
      label: 'contact@jsmastery.com',
    },
  ];
  return (
    <section className='mx-auto my-[1rem] box-content w-[calc(100vw-32px)] max-w-[1040px] px-4 pb-12 pt-[2rem] sm:w-[calc(100vw-96px)] sm:px-12 sm:pb-[40px]'>
      {listItems.map(({ title, href, label }, index) => (
        <ul
          key={`${title} + ${index}`}
          className='grid w-full grid-cols-linkList gap-[5px] border-t-[1px] border-solid border-transWhite03 px-1 pb-4 pt-8 sm:gap-4 sm:px-0 md:gap-[40px] lg:pb-[28px] lg:pt-[40px]'
        >
          <div className='flex w-full max-w-[220px] flex-col'>
            <h4 className='mb-[8px] text-[10px] font-[600] uppercase leading-[12px] text-transWhite02 sm:mb-4 sm:text-[12px] sm:leading-[24px]'>
              {title}
            </h4>
            <Link
              legacyBehavior
              className='relative left-0 mb-2 flex items-center text-[8px] leading-[14px] transition-[0.3s] ease-in-out hover:text-[6px] hover:text-white sm:mb-4 sm:text-[16px] sm:leading-[28px] md:inline md:text-[18px] md:leading-[30px]'
              href={href}
            >
              {label}
            </Link>
          </div>
        </ul>
      ))}
      <div className='flex w-full max-w-[1040px] flex-col justify-between sm:w-auto'>
        <div className='mb-8 flex flex-col flex-wrap items-center sm:mb-0 sm:mr-auto sm:items-baseline'>
          <p className='min-w-[100px] p-4 text-[14px] leading-[22px] tracking-wide text-transWhite01 sm:min-w-[288px] sm:text-[16px] sm:leading-[28px] md:text-[18px] md:leading-[30px]'>
            Innovating one project at a time
          </p>
        </div>
        <div className='flex grid-cols-[1/4/2/3] items-center justify-around sm:grid-cols-[1/5/2/6]'>
          {socialLinks.map((props, index) => (
            <SocialIcon key={index} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
