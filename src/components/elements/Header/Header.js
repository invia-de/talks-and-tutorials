import React from 'react';

import './Header.css';
import classnames from '../../classnames';

export default function Header({ className, children, ...other }) {
  return (
    <header
      className={classnames('header', className)}
      role="banner"
      {...other}
    >
      {children}
    </header>
  );
}
