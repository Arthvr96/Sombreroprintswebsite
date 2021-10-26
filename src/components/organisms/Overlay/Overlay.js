import React, { useContext } from 'react';
import { ScrollStateContext } from 'providers/ScrollState/ScrollState';
import { useNumberViews } from 'hooks/useNumberViews';
import ActionButton from 'components/molecues/ActionButton/ActionButton';
import { useWindowSize } from 'hooks/useWindowSize';
import { PositionWrapper } from './Overlay.style';

const Overlay = () => {
  const { height } = useWindowSize();
  const { scrollPositionY, handleScrollNextPrev } = useContext(ScrollStateContext);
  const { totalNumberOfViews } = useNumberViews();
  return (
    <>
      {scrollPositionY !== 0 ? (
        <PositionWrapper position={{ top: 5 }}>
          <ActionButton
            ariaLabel="Button scroll to previus section"
            rotateValue="180"
            onClick={() => handleScrollNextPrev(-1)}
          />
        </PositionWrapper>
      ) : null}
      {scrollPositionY !== totalNumberOfViews ? (
        <PositionWrapper position={{ top: height / 10 - 4.8 }}>
          <ActionButton
            ariaLabel="Button scroll to next section"
            rotateValue="0"
            onClick={() => handleScrollNextPrev(1)}
          />
        </PositionWrapper>
      ) : null}
    </>
  );
};

export default Overlay;
