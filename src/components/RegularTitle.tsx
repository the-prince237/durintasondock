import classNames from 'classnames';
import { StyledSectionTitleProps } from './types';

const className =
  'bg-gradient-title font-[800] bg-clip-text fill-transparent w-full sm:w-auto md:w-max max-w-max';

export const SectionTitleSec = (props: StyledSectionTitleProps) => (
  <h2
    className={classNames(
      className,
      'text-[32px] leading-[40px] sm:text-[48px] sm:leading-[48px] md:text-[56px] md:leading-[56px]',
    )}
    {...props}
  />
);

export const SectionTitlePrim = (props: StyledSectionTitleProps) => (
  <h2
    className={classNames(
      className,
      'text-[28px] leading-[32px] sm:text-[56px] sm:leading-[56px] md:text-[65px] md:leading-[72px]',
    )}
    {...props}
  />
);
