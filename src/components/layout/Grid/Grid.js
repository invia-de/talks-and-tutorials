import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';
import classnames from '../../classnames';

/**
 * Grid container which arranges it's `props.children` with the use of CSS-Grid.
 * `<Grid />`. They can be nested to get more layoutand children will get
 * block-level styling and are arranged automagically.
 *
 * When defining columns you should definitly use the new fraction unit (fr). It
 * makes using CSS Grid way more easy and fun then defining your Grid with
 * percentage values only (since it's kind of broken when also having a
 * `grid-gap` defined).
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default function Grid({
  children,
  className,
  columns,
  style,
  ...other
}) {
  return (
    <div
      style={{ ...style, gridTemplateColumns: columns }}
      className={classnames('grid', className)}
      {...other}
    >
      {children}
    </div>
  );
}
Grid.propTypes = {
  columns: PropTypes.string
};
Grid.defaultProps = {
  columns: '1fr'
};
