'use client';

import React, { useState, useRef, useEffect, ReactNode, SyntheticEvent } from 'react';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../components/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import classNames from 'classnames';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef<{ scrollWidth: number; scrollLeft: number }>();

  const scroll = (node: any, left: any) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e: SyntheticEvent, i: number) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length),
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length,
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take
        their development skills to the next level and build awesome apps.
      </SectionText>
      <ul
        className='mb-[8px] ml-[32px] flex max-w-[1040px] flex-initial touch-pan-x snap-x snap-mandatory list-none overflow-x-scroll bg-[#f1624] p-0 first-of-type:ml-0 sm:mb-[8px] sm:touch-none sm:snap-none sm:justify-between sm:overflow-auto'
        // ref={carouselRef}
        onScroll={handleScroll}
      >
        <>
          {TimeLineData.map((item, index) => (
            <div
              className={classNames('flex min-w-max sm:block', {
                'min-w-[120%]': index === TOTAL_CAROUSEL_COUNT - 1,
              })}
              key={index}
            >
              <div
                className={classNames(
                  'sm:rounded-0 relative ml-[32px] h-fit min-w-[120px] snap-start content-start overflow-visible rounded-[3px] bg-[#0e131f] p-[4px] opacity-50 sm:ml-0 sm:h-auto sm:min-w-max sm:max-w-[124px] sm:snap-none sm:overflow-auto sm:rounded-none sm:bg-[#0f1624] sm:p-0 sm:opacity-100 sm:content-none md:max-w-[196px] md:rounded-[3px]',
                  { 'opacity-100': activeItem },
                )}
                id={`carousel__item-${index}`}
                onClick={(e) => handleClick(e, index)}
              >
                <h4 className='gradient__text mb-[4px] flex text-[16px] font-bold leading-[24px] tracking-wide sm:text-[20px] sm:leading-[28px] md:mb-[8px] md:text-[24px] md:leading-[32px]'>
                  {`${item.year}`}
                  <svg
                    className='gradient__mask'
                    width='208'
                    height='6'
                    viewBox='0 0 208 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      clipRule='evenodd'
                      fillRule='evenodd'
                      d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
                      fill='url(#paint0_linear)'
                      fillOpacity='0.33'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear'
                        x1='-4.30412e-10'
                        y1='0.5'
                        x2='208'
                        y2='0.500295'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='white' />
                        <stop offset='0.79478' stopColor='white' stopOpacity='0' />
                      </linearGradient>
                    </defs>
                  </svg>
                </h4>
                <p className='pr-0 text-[10px] leading-[16px] tracking-wide text-transWhite00 sm:pr-[32px] sm:text-[12px] sm:leading-[18px] md:pr-[16px] md:text-[14px] md:leading-[22px]'>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </>
      </ul>
      <div className='mb-[48px] flex w-[288px] sm:hidden'>
        {TimeLineData.map((item, index) => {
          return (
            <button
              className={classNames('mr-[4px] p-[4px] opacity-[.33]', {
                'scale-[1.6] opacity-[1]': activeItem,
              })}
              key={index}
              onClick={(e) => handleClick(e, index)}
              type='button'
            >
              <div className='m-auto size-[3px] rounded-full bg-white' />
            </button>
          );
        })}
      </div>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
