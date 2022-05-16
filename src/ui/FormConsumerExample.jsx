import React from 'react';

import Input from './Input';
import { Consumer } from './FormContext';

const FormConsumerExample = ( props ) => {
    const { name, ...otherProps } = props;
    return (
      <Consumer>
        {({ values, errors, onChange }) => (
          <Input
            {...otherProps}
            name={name}
            onChange={onChange}
            value={values[name]}
            errorMessage={errors[name]}
          />
        )}
      </Consumer>
    );
}

export default FormConsumerExample;
