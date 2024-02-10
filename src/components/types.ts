import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivTagProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type ButtonTagProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export type PTagProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
export type SectionTagProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export type HeadingTagProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export type StyledSectionProps = {
  grid?: boolean;
  row?: boolean;
  nopadding?: boolean;
} & SectionTagProps;

export type StyledSectionTitleProps = {
  main?: boolean;
} & HeadingTagProps;

export type StyledSectionDividerProps = {
  colorAlt?: boolean;
  divider?: boolean;
} & DivTagProps;

export type StyledButtonProps = {
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
  front?: boolean;
} & DivTagProps;

export type StyledListContainerProps = {
  large?: boolean;
} & DivTagProps;

export type StyledLinkIconImgProps = StyledListContainerProps & {
  nav?: boolean;
} & DivTagProps;

export type ButtonProps = {
  form?: boolean;
  disabled?: boolean;
  alt?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};
