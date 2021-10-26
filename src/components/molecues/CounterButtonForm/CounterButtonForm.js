import React from 'react';
import PropTypes from 'prop-types';
import { CounterButton } from './CounterButtonForm.style';

const CounterButtonForm = ({ setFieldValue, values, handleChange, handleBlur }) => {
  return (
    <CounterButton>
      <button
        type="button"
        onClick={() => setFieldValue('counter', values.counter - 1)}
        disabled={values.counter === 0}
      >
        -
      </button>
      <input
        id="counter"
        name="counter"
        type="number"
        value={values.counter}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="button"
        onClick={() => setFieldValue('counter', values.counter + 1)}
        disabled={values.counter === 25}
      >
        +
      </button>
    </CounterButton>
  );
};

export default CounterButtonForm;

CounterButtonForm.propTypes = {
  setFieldValue: PropTypes.func,
  values: PropTypes.shape({ counter: PropTypes.number }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
};
