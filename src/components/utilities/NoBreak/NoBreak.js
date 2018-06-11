import React from 'react';
import PropTypes from 'prop-types';

import './NoBreak.css';
import classnames from '../../classnames';

/**
 * Prevent line breaks or prevent line-breaks and cut text.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default function NoBreak({ ellipsis, className, children, ...other }) {
  return (
    <div
      className={classnames(
        'no-break',
        ellipsis && 'no-break--ellipsis',
        className
      )}
      {...other}
    >
      {children}
    </div>
  );
}
NoBreak.propTypes = {
  /** cut text and add ... */
  ellipsis: PropTypes.bool
};
