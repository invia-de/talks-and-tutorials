import React from 'react';

import './Navigation.css';
import '../../global/Global';
import classnames from '../../classnames';

function createNavLink(child, i) {
  return (
    <li key={i} className="navigation__item">
      {React.cloneElement(child, {
        rel: child.props.target === '_blank' ? 'noopener noreferrer' : '',
        className: 'navigation__link'
      })}
    </li>
  );
}

function processChildren(children) {
  return Array.isArray(children)
    ? children.map((child, i) => {
        return createNavLink(child, i);
      })
    : createNavLink(children, 0);
}

/**
 * Navigation component intended to be used inside the `<Header />`.
 *
 * When using `<a />` or react-router `<Link />` inside of `<Navigation />` they
 * will be processed by this component. This means that it will add a specific
 * `className` and maybe `rel="noopener noreferrer"` (if it happens to be a
 * `target="_blank"` link) to it.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.2.0
 */
export default function Navigation({ children, className, ...other }) {
  return (
    <nav className={classnames('navigation', className)} {...other}>
      <ul className="navigation__list">{processChildren(children)}</ul>
    </nav>
  );
}
