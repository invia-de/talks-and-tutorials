import React from 'react';
import PropTypes from 'prop-types';

import * as icons from './paths';
import './Icon.css';
import classnames from '../../classnames';

/**
 * Renders an SVG icon
 *
 * Single SVG icons are generated via [icomoon](icomoon.io) using the SVG files
 * from `src/icons`. I did not automate this yet, since we don't expect much
 * change to the icon set.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default function Icon({ manner, viewBox, className, path, ...other }) {
  return (
    <svg
      className={classnames('icon', manner && 'icon--' + manner, className)}
      viewBox={viewBox}
      aria-hidden="true"
      {...other}
    >
      <path d={path || icons[manner]} />
    </svg>
  );
}
Icon.propTypes = {
  path: PropTypes.string,
  viewBox: PropTypes.string,
  manner: PropTypes.oneOf([
    'arrowDown',
    'arrowUp',
    'airport',
    'archive',
    'attachment',
    'available',
    'calendar',
    'catering',
    'clock',
    'close',
    'crown',
    'dashboard',
    'details',
    'duringTrip',
    'email',
    'inbound',
    'info',
    'insurance',
    'location',
    'notAvailable',
    'outbound',
    'palm',
    'preTrip',
    'postTrip',
    'preview',
    'record',
    'reload',
    'rentalcar',
    'roomtype',
    'search',
    'telephone',
    'tick',
    'toss',
    'transfer',
    'plus',
    'minus'
  ])
};
Icon.defaultProps = {
  viewBox: '0 0 32 32'
};
