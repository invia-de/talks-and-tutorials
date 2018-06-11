import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../elements/Icon';

import './Select.css';
import '../../global/Global';
import classnames from '../../classnames';

const getOptions = function(options) {
  return options.map(option => {
    return (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    );
  });
};

/**
 * select component
 *
 * @author [Eric Zieger](mailto:eric.zieger@invia.de)
 * @since 0.1.0
 */
export default class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasValue: !!this.props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      hasValue: !!event.target.value
    });

    this.props.onChange && this.props.onChange(event);
  }

  render() {
    const {
      label,
      onChange,
      className,
      options,
      emptyOption,
      ...other
    } = this.props;

    return (
      <label
        className={classnames(
          'select',
          other.disabled && 'select--disabled',
          this.state.hasValue && 'select--has-value',
          className
        )}
      >
        <span className="select__label">{label}</span>
        <select
          className="select__input"
          onChange={this.handleChange}
          {...other}
        >
          <option value="" key="_emptySelectOption">
            {emptyOption}
          </option>
          {getOptions(options)}
        </select>
        <span className="select__icon">
          <Icon manner="arrowDown" />
        </span>
      </label>
    );
  }
}
Select.propTypes = {
  label: PropTypes.any.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyOption: PropTypes.string
};
Select.defaultProps = {
  emptyOption: 'Bitte wählen'
};
