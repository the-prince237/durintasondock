import {
  ButtonTagProps,
  PTagProps,
  StyledButtonProps,
  StyledLinkIconImgProps,
  StyledListContainerProps,
  StyledSectionDividerProps,
  StyledSectionProps,
  StyledSectionTitleProps,
} from '../types';
import { ChildrenProp } from '@/containers/types';
import classNames from 'classnames';
import { SectionTitlePrim, SectionTitleSec } from '../RegularTitle';

export const Section = ({ grid, row, nopadding, ...props }: StyledSectionProps) => (
  <section
    className={classNames(
      'relative mx-auto my-0 box-content flex w-[calc(100vw-32px)] grid-cols-[1fr,1fr] flex-col overflow-hidden p-4 sm:w-auto sm:px-[48px] sm:py-[24px] md:py-[32px]',
      {
        'px-0 py-0': nopadding,
        grid: grid,
        'md:flex-row': row,
      },
    )}
    {...props}
  />
);

export const SectionTitle = ({ main, ...props }: StyledSectionTitleProps) =>
  main ? <SectionTitlePrim {...props} /> : <SectionTitleSec {...props} />;

export const SectionText = (props: PTagProps) => (
  <p
    className='pb-4 text-[16px] font-[300] leading-[24px] text-transWhite01 sm:max-w-[670px] sm:pb-[24px] sm:text-[20px] sm:leading-[32px] md:max-w-[800px] md:pb-[3.6rem]'
    {...props}
  />
);

export const SectionDivider = ({
  children,
  colorAlt,
  divider,
  ...props
}: StyledSectionDividerProps) => (
  <div
    className={classNames(
      'bg-gradient h-[2px] w-[32px] rounded-[10px] sm:h-[4px] sm:w-[48px] md:h-[6px] md:w-[64px]',
      { 'mx-0 my-[4rem]': divider, 'bg-gradient-alt': colorAlt },
    )}
    {...props}
  />
);

export const SectionSubText = (props: PTagProps) => (
  <p
    className='max-w-[672px] text-[14px] font-[300] leading-[22px] text-transWhite00 sm:text-[16px] sm:leading-[25px] md:max-w-[800px] md:text-[18px] md:leading-[32px]'
    {...props}
  />
);

export const SecondaryBtn = (props: ButtonTagProps) => (
  <button
    className='my-[8px] mb-[40px] mt-[16px] box-border w-full cursor-pointer rounded-[999px] border-[1px] border-solid border-transWhite02 bg-none px-[16px] text-[14px] font-[600] leading-[16px] text-white duration-[0.4s] ease-in-out hover:border-white hover:bg-white hover:text-[#0f1624] focus:outline-none active:border-[#304169] active:bg-[#e0e4eb] active:shadow-btnActive sm:mb-[64px] sm:mt-[24px] sm:w-fit sm:px-[24px] sm:py-[16px] sm:text-[20px] sm:leading-[20px] md:mb-[80px] md:mt-[32px] md:text-[18px] md:leading-[16px]'
    {...props}
  />
);

export const ButtonBack = ({ alt, form, disabled, front, ...props }: StyledButtonProps) => (
  <div
    className={classNames(
      'bg-gradient-btn relative m-[0,0,80px] mb-[32px] flex h-[32px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-[50px] text-[14px] font-[600] text-white opacity-[1] duration-500 ease-in-out sm:mb-[64px] sm:h-[48px] sm:w-[184px] sm:text-[16px] md:mb-0 md:h-[64px] md:w-[262px] md:text-[24px]',
      {
        'bg-gradient-btn-alt mb-0 text-[20px] sm:mb-0 sm:h-[52px] sm:w-[150px] sm:text-[20px] md:h-[52px] md:w-[150px]':
          alt,
      },
      {
        'm-0': alt || form,
      },
      { 'opacity-[0.5]': disabled },
      { absolute: front },
    )}
    {...props}
  />
);

export const ButtonFront = (props: ChildrenProp & Omit<StyledButtonProps, 'front'>) => (
  <ButtonBack front {...props} />
);

export const LinkContainer = ({ large, ...props }: StyledListContainerProps) => (
  <div
    className={classNames(
      'ml-[8px] flex justify-center rounded-[50px] p-[8px] duration-[0.3s] ease-in-out hover:scale-[1.2] hover:cursor-pointer hover:bg-[#212d45] md:ml-[16px]',
      { 'sm:ml-[16px]md:ml-[24px] ml-0': large },
    )}
    {...props}
  />
);

export const LinkIconImg = ({ large, nav, ...props }: StyledLinkIconImgProps) => (
  <div
    className={classNames('flex h-[16px] sm:h-[24px]', {
      'h-[32px] md:h-[32px]': large,
      'sm:h-[16px]': nav,
    })}
    {...props}
  />
);
