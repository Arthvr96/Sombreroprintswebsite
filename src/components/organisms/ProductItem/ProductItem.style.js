import styled from 'styled-components';
import media from 'helpers/media';

export const Wrapper = styled.li`
  position: relative;
  display: block;
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ProductItemContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ windowHeight }) => (windowHeight - 70) / 10}rem;
`;

export const Header = styled.h3`
  position: absolute;
  top: calc(2.5% + 4rem);
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;

  ${media.mobile`
  top: calc(5% + 4rem);
  font-size: ${({ theme }) => theme.fontSize.l};
  `}
`;

export const Poster = styled.img`
  height: 55%;
  ${media.mobile`
    height: 50%;
  `}
`;

export const Price = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;

  ${media.mobile`
    font-size: ${({ theme }) => theme.fontSize.s};
  `}
`;
