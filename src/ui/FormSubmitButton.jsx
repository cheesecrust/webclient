import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './FormContext';
import Button from './Button';

const FormSubmitButton = ( props ) => {
    const { children } = props;
    return (
      <Consumer>
        {({ submit }) => (
          <Button primary onPress={submit}>
            {children}
          </Button>
        )}
      </Consumer>
    );
}

FormSubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormSubmitButton;
