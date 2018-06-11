import React from 'react';
import PropTypes from 'prop-types';

import '../../global/Global';

function addSpan(child, rowSpan, colSpan, i) {
  const spanSyles = {
    ...((child.props && child.props.style) || {}),
    gridColumnEnd: colSpan ? 'span ' + colSpan : null,
    gridRowEnd: rowSpan ? 'span ' + rowSpan : null
  };

  return React.cloneElement(child, {
    style: spanSyles,
    key: child.props && child.props.key != null ? child.props.key : i
  });
}

/**
 * GridSpan component to make elements inside a `<Grid />` span columns and/or
 * rows.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.2.0
 */
export default function GridSpan({ children, rowSpan, colSpan }) {
  return Array.isArray(children)
    ? children.map((child, i) => {
        return addSpan(child, rowSpan, colSpan, i);
      })
    : addSpan(children, rowSpan, colSpan, 0);
}
GridSpan.propTypes = {
  colSpan: PropTypes.string,
  rowSpan: PropTypes.string
};
GridSpan.defaultProps = {
  colSpan: '1',
  rowSpan: '1'
};
