import styled from 'styled-components';
import arrowSvg from 'assets/arrow.svg';
import arrowSvgBlack from 'assets/arrowBlack.svg';
import media from 'helpers/media';

export const Button = styled.button`
  position: relative;
  width: ${({ isContent }) => (isContent ? '45%' : '2.1rem')};
  height: ${({ isContent }) => (isContent ? 'fit-content' : '2.1rem')};
  padding: ${({ isContent, isArrowLeftSide, disabledArrow }) => {
    if (isContent && !disabledArrow) {
      if (isArrowLeftSide) {
        return '1.4rem 1.4rem 1.4rem 3.9rem';
      }
      return '1.4rem 3.9rem 1.4rem 1.4rem';
    }
    if (isContent && disabledArrow) {
      return '0.7rem 1.4rem';
    }
    return '1.8rem';
  }};
  background-color: ${({ isReverseColors, theme }) =>
    isReverseColors ? theme.colors.white : theme.colors.black};
  border: 1px solid
    ${({ isReverseColors, theme }) => (isReverseColors ? theme.colors.black : theme.colors.white)};
  border-radius: ${({ isContent }) => (isContent ? '25px' : '100%')};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme, isReverseColors }) =>
    isReverseColors ? theme.colors.textSecondary : theme.colors.textPrimary};
  text-transform: uppercase;

  ${media.mobile`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: ${({ isContent }) => (isContent ? 'fit-content' : '2.1rem')};
  `}

  &::before {
    content: '';
    display: ${({ disabledArrow }) => (disabledArrow ? 'none' : 'block')};
    width: 2.1rem;
    height: 2.1rem;
    position: absolute;
    top: ${({ isContent }) => (isContent ? '50%' : 'unset')};
    right: ${({ isContent, isArrowLeftSide }) =>
      isContent && !isArrowLeftSide ? '1rem' : 'unset'};
    left: ${({ isContent, isArrowLeftSide }) => (isContent && isArrowLeftSide ? '1rem' : 'unset')};
    transform: ${({ isContent, rotateValue, isArrowLeftSide }) => {
      let rotate;
      let translate;
      if (!isContent) {
        rotate = rotateValue;
      } else if (isContent && !isArrowLeftSide) {
        rotate = 270;
      } else if (isContent && isArrowLeftSide) {
        rotate = 90;
      }

      if (isContent) {
        translate = 'translate(0%, -50%)';
      } else {
        translate = 'translate(-50%, -50%)';
      }
      return `${translate} rotate(${rotate}deg)`;
    }};
    background: url(${({ isReverseColors }) => (isReverseColors ? arrowSvgBlack : arrowSvg)})
      no-repeat;
  }
`;
