import { useEffect, useState } from 'react';

export const useWheelScroll = () => {
  const [deltaY, setDeltaY] = useState(0);

  useEffect(() => {
    let isActive = false;
    let isScrolling;
    const handleScroll = (e) => {
      if (!isActive) {
        setDeltaY(e.deltaY * Math.random());
        isActive = true;
      }
      window.clearTimeout(isScrolling);
      isScrolling = window.setTimeout(() => (isActive = false), 66);
    };
    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return deltaY;
};
