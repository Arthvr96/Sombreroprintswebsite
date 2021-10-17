import { useEffect, useState, useContext } from 'react';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { useWindowSize } from './useWindowSize';

export const useVerticalScrollTwo = () => {
  const { scrollPosY } = useContext(GlobalStateContext);
  const { height } = useWindowSize();
  const [scrollBy, setScrollBy] = useState(-height);

  useEffect(() => {
    if (scrollPosY !== 0) {
      setScrollBy(scrollPosY * -height);
    }
  }, [scrollPosY]);

  return scrollBy;
};
