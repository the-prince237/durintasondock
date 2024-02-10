import React from 'react';

import { ButtonBack, ButtonFront } from './index';
import { ButtonProps } from '../types';

const Button = (props: ButtonProps) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
