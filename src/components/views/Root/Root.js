import React from 'react';
import Providers from 'components/templates/Providers/Providers';
import ScrollTemplate from 'components/templates/ScrollTemplate/ScrollTemplate';
import ScrollSectionTemplate from 'components/templates/ScrollSectionTemplate/ScrollSectionTemplate';
import HeroesView from '../HeroesView/HeroesView';
import ProductsView from '../ProductsView/ProductsView';
import OtherViews from '../OtherViews/OtherViews';

const Root = () => {
  return (
    <Providers>
      <ScrollTemplate>
        <ScrollSectionTemplate isFirst>
          <HeroesView />
        </ScrollSectionTemplate>
        <ScrollSectionTemplate>
          <ProductsView />
          <OtherViews />
        </ScrollSectionTemplate>
      </ScrollTemplate>
    </Providers>
  );
};

export default Root;
