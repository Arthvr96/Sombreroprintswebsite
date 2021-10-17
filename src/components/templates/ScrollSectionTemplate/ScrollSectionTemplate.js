import React from 'react';
import PropTypes from 'prop-types';
import { useVerticalScrollOne } from 'hooks/useVerticalScrollOne';
import { useVerticalScrollTwo } from 'hooks/useVerticalScrollTwo';
import { useHorizontalScroll } from 'hooks/useHorizontalScroll';
import { ScrollSection } from './ScrollSectionTemplate.style';

const ScrollSectionTemplate = ({ children, isFirst }) => {
  const scrollByOne = useVerticalScrollOne();
  const scrollByTwo = useVerticalScrollTwo();
  const scrollByHorizontal = useHorizontalScroll();

  return (
    <ScrollSection
      isFirst={isFirst}
      scrollBy={isFirst ? scrollByOne : scrollByTwo}
      horizontalScroll={scrollByHorizontal}
    >
      {children}
    </ScrollSection>
  );
};

export default ScrollSectionTemplate;

ScrollSectionTemplate.propTypes = {
  children: PropTypes.node,
  isFirst: PropTypes.bool,
};
