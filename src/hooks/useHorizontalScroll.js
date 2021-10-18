import { useEffect, useState, useContext } from 'react';
import { GlobalStateContext } from 'providers/GlobalState/GlobalState';
import { useWindowSize } from './useWindowSize';
import { usePrevious } from './usePrevious';

export const useHorizontalScroll = () => {
  const { scrollPosX, scrollPosY } = useContext(GlobalStateContext);
  const prevScrollPosY = usePrevious(scrollPosY);
  const [scrollBy, setScrollBy] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    if (scrollPosY < 5) {
      if (scrollPosX === 0) {
        setScrollBy(0);
      } else if (scrollPosX === 1) {
        setScrollBy(-width);
      }
    }
  }, [scrollPosX]);

  useEffect(() => {
    if (scrollPosY === 5) {
      setScrollBy(-width / 2);
    } else if (scrollPosY === 4 && prevScrollPosY === 5) {
      setScrollBy(scrollPosX * -width);
    }
  }, [scrollPosY]);

  return scrollBy;
};
