import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext({});

const FormProvider = (props) => {
  const [state, setState] = useState({ values: props.initValues, errors: {} });

  const handleSubmit = (e) => {
    const { values, errors } = state;
    e.preventDefault();
    if (Object.values(errors).length === 0) {
      props.onSubmit(values);
    }
  };

  const onChange = (name, updatedValue) => {
    setState(
      ({ values, ...others }) => ({
        values: {
          ...values,
          [name]: updatedValue,
        },
        ...others,
      }),
      () => validate(state.values),
    );
  };

  const reset = () => {
    setState({ values: {} });
  };

  const validate = (values) => {
    const { validate } = props;
    if (!validate) {
      return;
    }
    const errors = props.validate(values);
    setState({
      errors,
    });
  };

  let { values, errors } = state;
  return (
    <Provider
      value={{
        errors,
        values,
        onChange: onChange,
        reset: reset,
      }}
    >
      <form onSubmit={handleSubmit}>{props.children}</form>
    </Provider>
  );
};

FormProvider.Consumer = Consumer;

FormProvider.propTypes = {
  validate: PropTypes.func,
};

FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
};

export default FormProvider;
