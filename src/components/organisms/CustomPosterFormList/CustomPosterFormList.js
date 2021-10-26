import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useWindowSize } from 'hooks/useWindowSize';
import { FieldForm } from 'components/atoms/FieldForm/FieldForm';
import CounterButtonForm from 'components/molecues/CounterButtonForm/CounterButtonForm';
import ActionButton from 'components/molecues/ActionButton/ActionButton';
import { StyledForm, WrapperButtons } from './CustomPosterFormList.style';

const ValidateSchema = Yup.object().shape({
  artistName: Yup.string().required('Required'),
  albumName: Yup.string().required('Required'),
});

const CustomPosterFormList = ({ setSelectedSize, sizes }) => {
  const { width } = useWindowSize();

  const initialValues = {
    size: 'a5',
    artistName: '',
    albumName: '',
    counter: 1,
  };

  const onSubmit = (values) =>
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);

  return (
    <Formik initialValues={initialValues} validationSchema={ValidateSchema} onSubmit={onSubmit}>
      {({ errors, touched, handleChange, handleBlur, values, isSubmitting, setFieldValue }) => (
        <StyledForm windowsize={width}>
          <FieldForm
            component="select"
            id="size"
            name="size"
            value={values.size}
            onChange={(e) => {
              handleChange(e);
              setSelectedSize(e.currentTarget.value);
            }}
            onBlur={handleBlur}
          >
            {sizes.map((obj) => (
              <option key={obj.size} value={obj.size}>
                {obj.size}
              </option>
            ))}
          </FieldForm>
          <FieldForm
            type="text"
            name="artistName"
            placeholder="enter atrist name"
            iserror={errors.artistName && touched.artistName}
          />
          <FieldForm
            type="text"
            name="albumName"
            placeholder="enter album name"
            iserror={errors.albumName && touched.albumName}
          />
          <WrapperButtons>
            <CounterButtonForm
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              setFieldValue={setFieldValue}
            />
            <ActionButton type="submit" disabledArrow isReverseColors content="Add to cart" />
          </WrapperButtons>
        </StyledForm>
      )}
    </Formik>
  );
};

export default CustomPosterFormList;

CustomPosterFormList.propTypes = {
  setSelectedSize: PropTypes.func,
  sizes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
