import React from 'react';
import PropTypes from 'prop-types';

import './Loading.css';
import '../../global/Global';
import classnames from '../../classnames';

/**
 * A loading animation used to identify we are wating for data.
 *
 * This component is designed to be used inside buttons when e.g. posting data
 * to the server and waiting for a response or inside content sections as
 * block-level loaders.
 *
 * When used inside `<Button />` the loading animation will use the current color
 * of the button.
 *
 * @author [pedox](https://codepen.io/pedox/pen/PwQezw)
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default function Loading({ children, className, ...other }) {
  return (
    <div className={classnames('loading', className)} {...other}>
      <svg className="loading__animation" x="0px" y="0px" viewBox="0 0 150 150">
        <circle className="loading__animation-circle" cx="75" cy="75" r="60" />
      </svg>
      {children}
    </div>
  );
}
Loading.propTypes = {
  /** an optional message to show next to the loading animation */
  message: PropTypes.any
};
