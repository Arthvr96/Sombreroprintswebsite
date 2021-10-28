import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'hooks/useWindowSize';
import { sizes as mediaSizes } from 'helpers/media';
import ViewTemplate from 'components/templates/ViewTemplate/ViewTemplate';
import CustomPosterFormList from '../CustomPosterFormList/CustomPosterFormList';
import { ProductItemContent, Header, Poster, Price, Wrapper } from './ProductItem.style';

const ProductItem = ({ name, img, sizes }) => {
  const { width } = useWindowSize();
  const [selectedSize, setSelectedSize] = useState('a5');

  const getPrice = (size) => {
    let price;
    sizes.map((obj) => {
      if (obj.size === size) {
        price = obj.price;
      }
      return null;
    });
    return price;
  };

  const getSizeOfImg = () => {
    if (width > mediaSizes.laptop) {
      return img.desktop;
    }
    if (width > mediaSizes.desktop) {
      return img.largeDesktop;
    }
    return img.mobile;
  };

  return (
    <Wrapper>
      <ViewTemplate>
        <ProductItemContent>
          <Header>{name}</Header>
          <Poster src={getSizeOfImg()} windowWidth={width} alt="poster" />
          <Price>From {getPrice(selectedSize)}$</Price>
          <CustomPosterFormList setSelectedSize={setSelectedSize} sizes={sizes} />
        </ProductItemContent>
      </ViewTemplate>
    </Wrapper>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.objectOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
