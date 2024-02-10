import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { DropDownItemProps } from './types';
import { FaLocationArrow } from 'react-icons/fa';

export const dropDownItems: DropDownItemProps[] = [
  {
    href: '#',
    title: 'Phone',
    Icon: AiFillPhone,
    description: "Let's get together and have a chat ?",
  },
  {
    href: '#',
    title: 'Email',
    description: "I you wan to talk just send a message and I'll get back to you !",
    Icon: AiOutlineMail,
  },
  {
    href: '#',
    title: 'Address',
    description: '1405, Angelus Dr, Florissant. Mo',
    Icon: FaLocationArrow,
  },
];
