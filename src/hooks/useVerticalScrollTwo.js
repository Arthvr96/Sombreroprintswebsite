import { useEffect, useState, useContext } from 'react';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { useWindowSize } from './useWindowSize';

export const useVerticalScrollTwo = () => {
  const { scrollPos } = useContext(GlobalStateContext);
  const { height } = useWindowSize();
  const [scrollBy, setScrollBy] = useState(-height);

  useEffect(() => {
    if (scrollPos !== 0) {
      setScrollBy(scrollPos * -height);
    }
  }, [scrollPos]);

  return scrollBy;
};
