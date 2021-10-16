import { useState, useEffect } from 'react';

export const useMobileScrollHorizontal = () => {
  const [touchstart, setTouchstart] = useState(0);
  const [cords, setCords] = useState({ touchstart: 0, touchend: 0 });

  useEffect(() => {
    const handleMobileScroll = (e) => {
      const { clientX } = e.changedTouches[0];

      if (e.type === 'touchstart') {
        setTouchstart(clientX);
      }
      if (e.type === 'touchend') {
        setCords({
          touchstart,
          touchend: clientX,
        });
      }
    };

    window.addEventListener('touchstart', handleMobileScroll);
    window.addEventListener('touchend', handleMobileScroll);

    return () => {
      window.removeEventListener('touchstart', handleMobileScroll);
      window.removeEventListener('touchend', handleMobileScroll);
    };
  }, [cords, touchstart]);

  return cords.touchstart - cords.touchend;
};
