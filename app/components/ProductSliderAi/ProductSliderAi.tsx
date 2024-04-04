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
      slidesPerView={4}
      centeredSlides={false}
      grabCursor={true}
      breakpoints={{
        769: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }}
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
