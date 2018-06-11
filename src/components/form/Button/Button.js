import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';
import '../../global/Global';

import NoBreak from '../../utilities/NoBreak';
import classnames from '../../classnames';

/**
 * Real buttons not links!
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default function Button({
  children,
  manner,
  active,
  type,
  className,
  ...other
}) {
  return (
    <button
      className={classnames(
        'button',
        manner && 'button--' + manner.replace(' ', ' button--'),
        active && 'button--active',
        className
      )}
      type={type || 'button'}
      {...other}
    >
      <NoBreak>{children}</NoBreak>
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.any.isRequired,
  manner: PropTypes.oneOf([
    'navigational',
    'action',
    'action icon-only',
    'ghost'
  ]),
  active: PropTypes.bool
};
Button.defaultProps = {
  active: false
};
