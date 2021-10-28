import styled from 'styled-components';

export const Wrapper = styled.li`
  display: block;
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ProductItemContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
  margin-top: 3rem;
`;

export const Poster = styled.img`
  width: ${({ windowWidth }) => (windowWidth * 0.8) / 10}rem;
`;

export const Price = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
`;
