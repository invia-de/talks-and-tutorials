import React from 'react';
import PropTypes from 'prop-types';

import './Toggle.css';
import '../../global/Global';
import classnames from '../../classnames';

/**
 * Option toggle input.
 *
 * Since we will only use this at one certain point in the SCD application we
 * may drop this completely and will use the `<Checkbox />` component. Since it
 * essentially is a checkbox with some additional or other styling.
 *
 * Also this only relys upon color to indicate on/off status with red/green which
 * is a no-go.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default function Toggle({ className, label, standalone, ...other }) {
  return (
    <label
      className={classnames(
        'toggle',
        other.disabled && 'toggle--disabled',
        standalone && 'toggle--standalone',
        className
      )}
    >
      <input className="toggle__input" type="checkbox" {...other} />
      <span className="toggle__icon" />
      {label}
    </label>
  );
}
Toggle.propTypes = {
  standalone: PropTypes.bool,
  label: PropTypes.any.isRequired
};
Toggle.defaultProps = {
  standalone: false
};
