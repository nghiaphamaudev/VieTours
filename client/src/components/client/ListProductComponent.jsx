import React from 'react';
import ProductCardComponent from './ProductCardComponent';

const ListProductComponent = () => {
  return (
    <div>
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <div className="flex items-center justify-center">
          <p className="py-6 my6  text-3xl font-bold tracking-tight text-black sm:text-4xl">
            All of products
          </p>
        </div>

        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start mt-5 ">
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
        </section>
      </section>
    </div>
  );
};

export default ListProductComponent;
