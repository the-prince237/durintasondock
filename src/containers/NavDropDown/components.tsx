import Link from 'next/link';
import { DropDownItemProps } from './types';

export const DropDownItem = ({ href, Icon, title, description }: DropDownItemProps) => (
  <Link
    legacyBehavior
    href={href}
    target='_blank'
    rel='noreferrer'
    className='flex w-full cursor-pointer items-start px-4 py-[12px] transition-[0.3s] ease-in-out hover:scale-[1.05] hover:bg-[#eee] hover:drop-shadow-dropDownItemHover group-[:nth-of-type(2)_&]:hover:drop-shadow-dropDownItem-2n-hover group-[:nth-of-type(3)_&]:hover:drop-shadow-dropDownItem-3n-hover'
  >
    <div className='mr-[16px] size-[32px]'>
      <Icon />
    </div>
    <div className='flex flex-col'>
      <h2 className='text-start text-[18px] leading-[26px] text-[#0f1624]'>{title}</h2>
      <p className='text-start leading-[22px] text-[#0f1624] text-[14p»] opacity-50'>
        {description}
      </p>
    </div>
  </Link>
);
