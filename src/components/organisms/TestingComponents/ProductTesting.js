import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: darkblue;
  color: grey;

  h2 {
    padding-top: 2rem;
    font-size: 3.2rem;
  }
`;

const Mockup = styled.div`
  margin-top: 2.5rem;
  width: 80vw;
  height: 80vw;
  background-color: purple;
`;
const Paragraph = styled.div`
  margin-top: 2.5rem;
  width: 80vw;
  font-size: 2.2rem;
`;

const ProductTesting = ({ number }) => {
  return (
    <Wrapper>
      <h2>Product #{number}</h2>
      <Mockup />
      <Paragraph>
        Esse culpa ut deserunt sint fugiat id mollit culpa tempor nisi commodo eu reprehenderit
        Lorem. Culpa est ipsum proident Lorem proident officia. Duis cillum officia et nisi esse
        nostrud magna non magna nisi. Lorem deserunt minim incididunt irure ipsum consequat duis
        cupidatat ex.
      </Paragraph>
    </Wrapper>
  );
};

export default ProductTesting;

ProductTesting.propTypes = {
  number: PropTypes.string,
};
