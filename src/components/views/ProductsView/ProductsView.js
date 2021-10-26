import React from 'react';
import ProductItem from 'components/organisms/ProductItem/ProductItem';
import { products } from 'backend/cmsData';
import { Wrapper, ProductsList } from './ProductsView.style';

const ProductsView = () => {
  const {
    styles: { music, movies },
  } = products;
  return (
    <Wrapper>
      <ProductsList>
        {music.map((item) => (
          <ProductItem
            key={`music${item.name}`}
            name={item.name}
            img={item.img}
            sizes={item.sizes}
          />
        ))}
      </ProductsList>
      <ProductsList>
        {movies.map((item) => (
          <ProductItem
            key={`movies${item.name}`}
            name={item.name}
            img={item.img}
            sizes={item.sizes}
          />
        ))}
      </ProductsList>
    </Wrapper>
  );
};

export default ProductsView;
