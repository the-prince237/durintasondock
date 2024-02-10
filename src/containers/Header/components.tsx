import { NavLinkProps, SocialIconProps } from '../types';
import Link from 'next/link';

export const NavLink = ({ href, label }: NavLinkProps) => (
  <li>
    <Link
      href={href}
      className='cursor-pointer p-[0.5rem] text-[2rem] leading-[32px] text-transWhite00 duration-[0.4s] ease-in-out hover:text-white hover:opacity-100 sm:p-0'
    >
      {label}
    </Link>
  </li>
);

export const SocialIcon = ({ href, Icon }: SocialIconProps) => (
  <Link
    legacyBehavior
    className='scale-[1.2] cursor-pointer rounded-[50px] p-[8px] text-white duration-[0.3s] ease-in-out hover:bg-[212d45]'
    href={href}
  >
    <Icon size='3rem' />
  </Link>
);
