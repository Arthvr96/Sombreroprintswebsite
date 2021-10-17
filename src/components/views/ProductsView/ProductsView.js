import React from 'react';
import styled from 'styled-components';
import ProductTesting from 'components/organisms/ProductTesting/ProductTesting';
import { Wrapper } from './ProductsView.style';

const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;

const ProductsView = () => {
  return (
    <Wrapper>
      <ProductsList>
        <ProductTesting number="1" />
        <ProductTesting number="2" />
        <ProductTesting number="3" />
        <ProductTesting number="4" />
      </ProductsList>
      <ProductsList>
        <ProductTesting number="1" />
        <ProductTesting number="2" />
        <ProductTesting number="3" />
        <ProductTesting number="4" />
      </ProductsList>
    </Wrapper>
  );
};

export default ProductsView;
