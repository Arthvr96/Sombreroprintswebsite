import { useEffect, useState, useContext } from 'react';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { useWindowSize } from './useWindowSize';

export const useHorizontalScroll = () => {
  const { scrollPosX } = useContext(GlobalStateContext);
  const [scrollBy, setScrollBy] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    if (scrollPosX === 0) {
      setScrollBy(0);
    } else if (scrollPosX === 1) {
      setScrollBy(-width);
    }
  }, [scrollPosX]);

  return scrollBy;
};
