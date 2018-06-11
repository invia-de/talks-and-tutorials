import React from 'react';

import './Spread.css';
import classnames from '../../classnames';

/**
 * Positions inner elements on the whole space available with even space between them.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default function Spread({ children, className, ...other }) {
  return <div className={classnames('spread', className)}>{children}</div>;
}
