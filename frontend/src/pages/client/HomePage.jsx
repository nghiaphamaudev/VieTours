import React from 'react';
import BannerComponent from '../../components/client/BannerAboutComponent';
import FooterComponent from '../../components/client/FooterComponent';
import HeaderComponent from '../../components/client/HeaderComponent';
const HomePage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <BannerComponent></BannerComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HomePage;
