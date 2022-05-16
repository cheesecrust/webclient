import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';

const TextArea = (props) => {
  const textareaEl = useRef(null);
  useEffect(() => {
    if (props.autoFocus) textareaEl.current.focus();
  }, []);

  const handleChange = (e) => {
    console.log('a');
    const { name, onChange } = props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  const {
    errorMessage,
    label,
    value,
    name,
    type,
    styles,
    large,
    xlarge,
    small,
    xsmall,
  } = props;

  return (
    <fieldset {...css(styles.wrapper)}>
      <label
        htmlFor={`textarea_${name}`}
        {...css(styles.label, errorMessage && styles.errorLabel)}
      >
        {errorMessage || label}
      </label>
      <textarea
        {...css(
          styles.textarea,
          errorMessage && styles.error,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
        )}
        id={`textarea_${name}`}
        ref={textareaEl}
        type={type}
        onChange={handleChange}
        value={value}
      />
    </fieldset>
  );
};

TextArea.propTypes = {
  ...withStylesPropTypes,
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

TextArea.defaultProps = {
  onChange: () => {},
  autoFocus: false,
};

export default withStyles(({ depth, unit, color, size, lineHeight }) => ({
  wrapper: {
    border: 0,
    padding: 0,
    position: 'relative',
  },
  label: {
    display: 'block',
    fontSize: size.xs,
    top: 2,
    left: unit * 2,
    cursor: 'pointer',
  },
  textarea: {
    marginTop: 2,
    fontSize: size.md,
    lineHeight: lineHeight.md,
    padding: unit * 1.5,
    border: 1,
    borderColor: color.primary,
    borderStyle: 'solid',
    borderRadius: 4,
    outline: 0,
    width: '900px',
    height: '120px',
    ':focus': {
      boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)',
    },
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  errorLabel: {
    color: color.error,
  },
  error: {
    borderColor: color.error,
  },
}))(TextArea);
