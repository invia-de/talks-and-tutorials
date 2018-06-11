import React from 'react';
import PropTypes from 'prop-types';

import './Brand.css';
import '../../global/Global';
import Icon from '../Icon/Icon';
import classnames from '../../classnames';

/**
 * Branding component including the Invia logo and the application name next to
 * it and is designed to be used inside the `<Header />` component.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default function Brand({ className, name, ...other }) {
  return (
    <h1 className={classnames('brand', className)} {...other}>
      <Icon
        viewBox="0 0 81 32"
        className="brand__logo"
        path="M0 0h5.027v4.791h-5.027v-4.791zM0 8.166v20.056c1.038-0.417 2.768-1.062 5.027-1.73v-18.327h-5.027zM20.076 7.524c-3.047 0.005-5.7 1.689-7.082 4.177l-0.021 0.041-0.086-0.092v-3.486h-4.757v17.502c1.533-0.367 3.223-0.706 5.027-0.984v-6.793c0-3.486 2.162-6.239 5.51-6.239 2.954 0 4.365 1.606 4.453 5.322v7.050c1.825 0.046 3.564 0.184 5.275 0.411l-0.249-0.027v-8.81c-0.002-5.321-3.132-8.072-8.069-8.072zM46.826 8.166l-5.729 18.212h-0.091l-5.956-18.213h-5.638l6.472 17.954c2.007 0.638 3.675 1.306 5.285 2.077l-0.245-0.106c0.949 0.467 2.161 0.975 3.402 1.419l0.265 0.083 7.6-21.43h-5.362zM54.086 0h5.026v4.791h-5.026v-4.791zM54.086 8.166v23.543c1.492 0.171 3.238 0.277 5.005 0.29l0.020 0v-23.835h-5.026zM72.176 7.524c-5.026 0-10.008 1.789-10.36 7.89h5.027c0.221-2.569 2.205-3.761 5.026-3.761 2.028 0 4.718 0.505 4.718 3.211 0 3.075-3.218 2.661-6.832 3.349-4.233 0.505-8.774 1.47-8.774 7.384-0.003 0.072-0.005 0.156-0.005 0.24 0 2.643 1.604 4.911 3.891 5.884l0.042 0.016c6.052-0.606 11.606-1.942 16.839-3.929l-0.449 0.15v-13.651c-0.061-4.925-4.698-6.783-9.121-6.783zM76.281 23.898c0 3.303-3.44 4.497-5.644 4.497-1.763 0-4.629-0.692-4.629-3.027 0-2.752 1.94-3.578 4.099-3.944 2.205-0.413 4.63-0.368 6.173-1.424v3.899z"
      />
      {name}
    </h1>
  );
}
Brand.propTypes = {
  /** the name of the application */
  name: PropTypes.string
};
