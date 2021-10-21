import styled from 'styled-components';
import shoppingCart from 'assets/shopping_cart.svg';

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  background: transparent;
  border: 0;

  div {
    width: 2rem;
    height: 2rem;
    background: url(${shoppingCart}) no-repeat;
    background-size: cover;
  }
`;
