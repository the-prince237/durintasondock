import React from 'react';

import { DropDownItem } from './components';
import classNames from 'classnames';
import { dropDownItems } from './data';

const NavDropDown = (props: any) => (
  <div
    className={classNames(
      'flex-column group absolute right-[-25%] top-[24px] z-[100] hidden w-[280px] origin-top scale-y-[0.3] cursor-default overflow-hidden rounded-[8px] bg-white px-0 py-[4px] opacity-0 transition-[0.3s] ease-in-out sm:top-[32px] md:top-[40px]',
      { 'flex scale-y-100 opacity-[1]': props.isOpen },
    )}
  >
    {dropDownItems.map((props, index) => (
      <DropDownItem key={props.title + index} {...props} />
    ))}
  </div>
);

export default NavDropDown;
