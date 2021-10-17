import { useEffect, useState, useContext } from 'react';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { useWindowSize } from './useWindowSize';

export const useVerticalScrollOne = () => {
  const { scrollPosY } = useContext(GlobalStateContext);
  const [scrollBy, setScrollBy] = useState(0);
  const { height } = useWindowSize();

  useEffect(() => {
    if (scrollPosY === 0) {
      setScrollBy(0);
    } else if (scrollPosY === 1) {
      setScrollBy(-height);
    }
  }, [scrollPosY]);

  return scrollBy;
};