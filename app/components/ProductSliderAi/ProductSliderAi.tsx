'use client';

import {ProductType} from '@/app/components/Product/types';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import React from 'react';
import {Product} from '@/app/components/Product';
import './styles';

export const ProductSliderAi = ({items}: { items: ProductType[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={false}
      grabCursor={true}
      breakpoints={{
        420: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        660: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        880: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }}
      breakpointsBase={'container'}
      spaceBetween={8}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
    >
      {items.map((product) => (
        <SwiperSlide
          key={product.id}
        >
          <Product
            product={product}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
