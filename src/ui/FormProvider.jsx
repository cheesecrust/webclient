import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Provider } from './FormContext';

const FormProvider = ( props ) => {
  const [state, setState] = useState({values:{}, errors:{}});

  const  onChange = (name, updatedValue) => {
    setState(
      ({ values }) => ({
        ...state,
        values: {
          ...values,
          [name]: updatedValue,
        },
      })
    );
  }

  const reset = () => {
    setState({ values: {}, errors: {} });
  }

  const submit = () => {
    validate(state.values);
    if(Object.entries(props.validate(state.values)).length>0) {
      console.log("에러 발생으로 전송 중지!!!");
      return;
    }
    props.onSubmit(state.values);
  }

  const validate = (values) => {
    const { validate } = props;
    if (!validate) {
      return;
    }
    const errors = props.validate(values);
    setState({
      ...state,
      errors,
    });
  }

    const { values, errors } = state;
    return (
      <Provider
        value={{
          errors,
          values,
          onChange: onChange,
          reset: reset,
          submit: submit,
        }}
      >
        {props.children}
      </Provider>
    );
}

FormProvider.propTypes = {
  validate: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

FormProvider.defaultProps = {
  validate: () => ({}),
};

export default FormProvider;
/*
const validate = (values) => {
  const errors = {};
  if (!values.name) errors['name'] = '이름을 입력해야합니다.';
  if (values.age && values.age < 18) errors['age'] = '나이는 18세 이상이여야 합니다.';
  return errors;
};
<Form validate={validate}>
  <FormConsumerExample name="name" />
  <FormConsumerExample name="age" />
  <FormConsumerExample name="totalAmount" />
</Form>
*/
