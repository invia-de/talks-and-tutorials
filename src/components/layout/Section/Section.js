import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../form/Button';
import SROnly from '../../utilities/SROnly';

import './Section.css';
import '../../global/Global';

import Icon from '../../elements/Icon';
import classnames from '../../classnames';

let counter = 0;

/**
 * Container to show content inside which may have a toggable content area.
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default class Section extends React.Component {
  constructor() {
    super();

    this.state = {
      hidden: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => {
      return {
        hidden: !prevState.hidden
      };
    });
  }

  render() {
    const {
      headline,
      className,
      actions,
      toggable,
      children,
      additionalActions,
      ...other
    } = this.props;

    const id = headline.replace(/ /g, '-');
    const hidden = this.state.hidden;

    counter++;

    return (
      <section className={classnames('section', className)} {...other}>
        <h1 className="section__headline">{headline}</h1>
        <div className="section__additional-actions">{additionalActions}</div>
        <div className="section__actions">
          <React.Fragment>
            {actions}
            {toggable ? (
              <Button
                aria-controls={'section-content-' + counter}
                manner="action icon-only"
                onClick={this.handleToggle}
              >
                {hidden ? (
                  <Icon manner="arrowDown" />
                ) : (
                  <Icon manner="arrowUp" />
                )}
                <SROnly>
                  {hidden ? 'zeige ' : 'verstecke '} {headline}
                </SROnly>
              </Button>
            ) : null}
          </React.Fragment>
        </div>
        <div
          aria-expanded={!hidden}
          aria-hidden={hidden}
          className="section__content"
          id={'content-' + id}
        >
          {children}
        </div>
      </section>
    );
  }
}
Section.propTypes = {
  /** headline of the section */
  headline: PropTypes.any.isRequired,
  /** area where you can drop actions */
  actions: PropTypes.any,
  /** area where you can drop additional actions */
  additionalActions: PropTypes.any,
  /** should the content be toggable (hide, show) */
  toggable: PropTypes.bool
};
Section.defaultProps = {
  actions: null,
  additionalActions: null,
  toggable: true
};
