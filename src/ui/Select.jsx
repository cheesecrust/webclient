import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';
import Option from './Option';

export { Option };

const Select = ( props ) => {
  const [state, setState] = useState({ focused: false });
  const selectEl = useRef(null);

  const handleFocus = useCallback(() => {
    setState({ focused: true });
  }, []);

  const handleBlur = useCallback(() => {
    setState({ focused: false });
  }, []);

  const handleChange = useCallback((e) => {
    const { name, onChange } = props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }, [props]);

  useEffect(() => { if (props.autoFocus) selectEl.current.focus(); }, []);

    const {
      children,
      disabled,
      errorMessage,
      label,
      value,
      name,
      styles,
      large,
      xlarge,
      small,
      xsmall
    } = props;

    const { focused } = state;

    return (
      <fieldset {...css(styles.wrapper)}>
        <label
          htmlFor={`input_${name}`}
          {...css(styles.label, errorMessage && styles.errorLabel)}
        >
          {errorMessage || label}
        </label>
        <div
          {...css(
            styles.placeholder,
            xsmall && styles.xsmallPadding,
            small && styles.smallPadding,
            large && styles.largePadding,
            xlarge && styles.xlargePadding,
            focused && styles.focus,
            errorMessage && styles.error
          )}
        >
          <select
            {...css(
              styles.select,
              xsmall && styles.xsmall,
              small && styles.small,
              large && styles.large,
              xlarge && styles.xlarge
            )}
            disabled={disabled}
            id={`input_${name}`}
            ref={selectEl}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
          >
            {React.Children.map(children, child =>
              React.cloneElement(child, { disabled })
            )}
          </select>
        </div>
      </fieldset>
    );
}

Select.propTypes = {
  ...withStylesPropTypes,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool
};

Select.defaultProps = {
  onChange: () => {},
  autoFocus: false
};

export default withStyles(({ depth, unit, color, size, lineHeight }) => ({
  wrapper: {
    border: 0,
    padding: 0,
    position: 'relative'
  },
  label: {
    display: 'block',
    fontSize: size.xs,
    top: 2,
    left: unit * 2,
    cursor: 'pointer'
  },
  placeholder: {
    marginTop: 2,
    border: 1,
    borderColor: color.primary,
    borderStyle: 'solid',
    borderRadius: 4,
    padding: unit * 1.5
  },
  focus: {
    boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)'
  },
  xlargePadding: {
    padding: unit * 2
  },
  largePadding: {
    padding: unit * 2
  },
  smallPadding: {
    padding: unit - 1
  },
  select: {
    fontSize: size.md,
    lineHeight: lineHeight.md,
    backgroundColor: color.white,
    border: 0,
    outline: 0,
    width: '100%'
  },
  xlarge: {
    fontSize: size.xg
  },
  large: {
    fontSize: size.lg
  },
  small: {
    fontSize: size.sm
  },
  errorLabel: {
    color: color.error
  },
  error: {
    borderColor: color.error
  }
}))(Select);
