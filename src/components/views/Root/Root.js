import React from 'react';
import Providers from 'components/templates/Providers/Providers';
import ScrollTemplate from 'components/templates/ScrollTemplate/ScrollTemplate';
import HeroTesting from 'components/organisms/TestingComponents/HeroTesting';
import { ScrollSection } from 'components/templates/ScrollSection/ScrollSection';
import ProductsView from 'components/views/ProductsView/ProductsView';

const Root = () => {
  return (
    <Providers>
      <ScrollTemplate>
        <ScrollSection>
          <HeroTesting bgColor="red" name="Hero1" />
          <HeroTesting bgColor="green" name="Hero2" />
        </ScrollSection>
        <ScrollSection>
          <ProductsView />
        </ScrollSection>
        <ScrollSection isColumns>
          <HeroTesting bgColor="purple" name="Other1" />
          <HeroTesting bgColor="purple" name="Other2" />
        </ScrollSection>
      </ScrollTemplate>
    </Providers>
  );
};

export default Root;
