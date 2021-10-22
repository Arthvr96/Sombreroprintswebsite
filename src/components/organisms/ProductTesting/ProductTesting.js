import React from 'react';
import PropTypes from 'prop-types';
import ViewTemplate from 'components/templates/ViewTemplate/ViewTemplate';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};

  h2 {
    padding-top: 2rem;
    font-size: 3.2rem;
  }
`;

const Mockup = styled.div`
  margin-top: 2.5rem;
  width: 80vw;
  height: 80vw;
  background-color: #2c242d;
`;
const Paragraph = styled.div`
  margin-top: 2.5rem;
  width: 80vw;
  font-size: 2.2rem;
`;

const ProductTesting = ({ number }) => {
  return (
    <ViewTemplate>
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
    </ViewTemplate>
  );
};

export default ProductTesting;

ProductTesting.propTypes = {
  number: PropTypes.string,
};
