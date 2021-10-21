import React from 'react';
import Providers from 'components/templates/Providers/Providers';
import ScrollTemplate from 'components/templates/ScrollTemplate/ScrollTemplate';
import ScrollSectionTemplate from 'components/templates/ScrollSectionTemplate/ScrollSectionTemplate';
import Navigation from 'components/organisms/Navigation/Navigation';
import Footer from 'components/views/Footer/Footer';
import HeroesView from '../HeroesView/HeroesView';
import ProductsView from '../ProductsView/ProductsView';
import OtherViews from '../OtherViews/OtherViews';

const Root = () => {
  return (
    <Providers>
      <ScrollTemplate>
        <Navigation />
        <ScrollSectionTemplate isFirst>
          <HeroesView />
        </ScrollSectionTemplate>
        <ScrollSectionTemplate>
          <ProductsView />
          <OtherViews />
        </ScrollSectionTemplate>
        <Footer />
      </ScrollTemplate>
    </Providers>
  );
};

export default Root;
