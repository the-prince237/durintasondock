import { IconType } from 'react-icons';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { NavLinkProps, SocialIconProps } from '../types';

export const socialLinks: Array<SocialIconProps> = [
  {
    href: 'https://github.com',
    Icon: AiFillGithub,
  },
  {
    href: 'https://instagram.com',
    Icon: AiFillInstagram,
  },
  {
    href: 'https://linkedin.com',
    Icon: AiFillLinkedin,
  },
];

export const navLinks: Array<NavLinkProps> = [
  {
    href: '#projects',
    label: 'Projects',
  },
  {
    href: '#tech',
    label: 'Technologies',
  },
  {
    href: '#about',
    label: 'About',
  },
];
