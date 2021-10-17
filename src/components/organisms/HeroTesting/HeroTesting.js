import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ViewTemplate from 'components/templates/ViewTemplate/ViewTemplate';

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};

  h2 {
    padding-top: 2rem;
    font-size: 3.2rem;
  }
`;

const HeroTesting = ({ bgColor, name }) => {
  return (
    <ViewTemplate>
      <HeroWrapper bgColor={bgColor}>
        <h2>{name}</h2>
      </HeroWrapper>
    </ViewTemplate>
  );
};

HeroTesting.propTypes = {
  bgColor: PropTypes.string,
  name: PropTypes.string,
};

export default HeroTesting;
