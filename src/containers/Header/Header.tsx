import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { navLinks, socialLinks } from './data';

import { NavLink, SocialIcon } from './components';

const Header = () => (
  <div className='flex grid-cols-[1/1/2/3] flex-row content-center sm:grid-cols-[1/1/2/2]'>
    <div className='flex grid-cols-[1/1/2/3] flex-row content-center sm:grid-cols-[1/1/2/2]'>
      <a style={{ display: 'flex', alignItems: 'center', color: 'white' }} href='#portfolio'>
        <DiCssdeck size='3rem' /> <span>Portfolio</span>
      </a>
    </div>
    <div className='flex w-full grid-cols-[2/2/3/5] items-center justify-around sm:w-auto sm:grid-cols-[1/2/2/4]'>
      {navLinks.map(({ href, label }, index) => (
        <NavLink key={`${label}-${index}`} href={href} label={label} />
      ))}
    </div>
    <div className='flex grid-cols-[1/4/2/3] items-center justify-around sm:grid-cols-[1/5/2/6]'>
      {socialLinks.map((props, index) => (
        <SocialIcon key={index} {...props} />
      ))}
    </div>
  </div>
);

export default Header;
