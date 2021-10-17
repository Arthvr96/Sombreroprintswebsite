import React from 'react';
import PropTypes from 'prop-types';
import { useVerticalScrollOne } from 'hooks/useVerticalScrollOne';
import { useVerticalScrollTwo } from 'hooks/useVerticalScrollTwo';
import { ScrollSection } from './ScrollSectionTemplate.style';

const ScrollSectionTemplate = ({ children, isFirst }) => {
  const scrollByOne = useVerticalScrollOne();
  const scrollByTwo = useVerticalScrollTwo();

  return (
    <ScrollSection isFirst={isFirst} scrollBy={isFirst ? scrollByOne : scrollByTwo}>
      {children}
    </ScrollSection>
  );
};

export default ScrollSectionTemplate;

ScrollSectionTemplate.propTypes = {
  children: PropTypes.node,
  isFirst: PropTypes.bool,
};
