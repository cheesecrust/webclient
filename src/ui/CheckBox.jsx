import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from './withStyles';

const CheckBox = ( props ) => {
  const checkboxEl = useRef(null);
  useEffect(() => { if(props.autoFocus) checkboxEl.current.focus(); }, []);

  const handleClick = (e) => {
    const { name, onChange } = props;
    onChange(name, e.target.checked);
  }

    const {
      errorMessage,
      label,
      children,
      styles,
      checked,
    } = props;

    return (
      <label>
        {label}
        <div>
          <input
            ref={checkboxEl}
            type="checkbox"
            checked={checked && 'checked'}
            onClick={handleClick}
          />
          {children}
        </div>
        {errorMessage && (
          <div>
            <span {...css(styles.errorText)}>{errorMessage}</span>
          </div>
        )}
      </label>
    );
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
CheckBox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.error,
  },
}))(CheckBox);
