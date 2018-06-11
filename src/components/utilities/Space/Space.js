import React from 'react';
import PropTypes from 'prop-types';

import '../../global/Global';
import './Space.css';
import classnames from '../../classnames';

function addTopSpacing(child, i, small, { top, left }) {
  return React.cloneElement(child, {
    className: classnames(
      child.props.className,
      top && '_mt' + small,
      left && '_ml' + small
    ),
    key: child.props && child.props.key != null ? child.props.key : i
  });
}

function addBottomSpacing(child, i, small, { right, bottom }) {
  return React.cloneElement(child, {
    className: classnames(
      child.props.className,
      bottom && '_mb' + small,
      right && '_mr' + small
    ),
    key: child.props && child.props.key != null ? child.props.key : i
  });
}

/**
 * Space component to apply margin spacing to it's `props.children`.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.2.0
 */
export default function Space({ children, small, ...other }) {
  small = small ? '--s' : '';

  return Array.isArray(children)
    ? children.map((child, i) => {
        if (i === 0) {
          return addTopSpacing(child, i, small, other);
        } else if (i === children.length - 1) {
          return addBottomSpacing(child, i, small, other);
        }

        return child;
      })
    : addTopSpacing(
        addBottomSpacing(children, 0, small, other),
        0,
        small,
        other
      );
}
Space.propTypes = {
  small: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool
};
