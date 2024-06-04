import React from 'react';
const BannerComponent = () => {
  return (
    <div>
      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{ backgroundImage: `url('images/bg_1.jpg')` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="fa fa-chevron-right"></i>
                  </a>
                </span>
                <span>
                  About us <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerComponent;
