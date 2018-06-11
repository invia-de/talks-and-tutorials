import React from 'react';

import './SROnly.css';
import classnames from '../../classnames';

/**
 * Provides text for screenreader users.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default function SROnly({ className, children, ...other }) {
  return <div className={classnames('sr-only', className)}>{children}</div>;
}
