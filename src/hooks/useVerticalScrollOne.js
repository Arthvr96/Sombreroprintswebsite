import { useEffect, useState, useContext } from 'react';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { useWindowSize } from './useWindowSize';

export const useVerticalScrollOne = () => {
  const { scrollPos } = useContext(GlobalStateContext);
  const [scrollBy, setScrollBy] = useState(0);
  const { height } = useWindowSize();

  useEffect(() => {
    if (scrollPos === 0) {
      setScrollBy(0);
    } else if (scrollPos === 1) {
      setScrollBy(-height);
    }
  }, [scrollPos]);

  return scrollBy;
};
