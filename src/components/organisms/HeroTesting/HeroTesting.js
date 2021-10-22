import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ViewTemplate from 'components/templates/ViewTemplate/ViewTemplate';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;

  h2 {
    padding-top: 2rem;
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 2.4rem;
  width: 90%;
  line-height: 1.5;
`;

const HeroTesting = ({ bgColor, name, content }) => {
  return (
    <ViewTemplate>
      <HeroWrapper bgColor={bgColor}>
        <h2>{name}</h2>
        {content ? <Paragraph>{content}</Paragraph> : null}
      </HeroWrapper>
    </ViewTemplate>
  );
};

HeroTesting.propTypes = {
  bgColor: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
};

export default HeroTesting;
