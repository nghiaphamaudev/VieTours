import React from 'react';
import AboutComponent from '../components/client/AboutComponent';
import BannerComponent from '../components/client/BannerComponent';
import FooterComponent from '../components/client/FooterComponent';
import HeaderComponent from '../components/client/HeaderComponent';
import ListProductComponent from '../components/client/ListProductComponent';
import NewsLetterComponent from '../components/client/NewsLetterComponent';
import TrustedComponent from '../components/client/TrustedComponent';

const HomePage = () => {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <TrustedComponent />
      <AboutComponent />
      <ListProductComponent />

      {/* <NewsLetterComponent /> */}
      <FooterComponent />
    </div>
  );
};

export default HomePage;
