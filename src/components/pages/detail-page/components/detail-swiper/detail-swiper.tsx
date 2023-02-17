import React, { useLayoutEffect, useRef, useState } from 'react';
import { DetailSwiperSC } from './detail-swiper.styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SwiperClass from 'swiper/types/swiper-class';

import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from 'swiper';
import { IGetCarDetailResponse } from '@/dto/car';
import Image from 'next/image';

interface DetailSwiperProps {
  carDetailData: IGetCarDetailResponse;
}

const DetailSwiper: React.FC<DetailSwiperProps> = ({ carDetailData }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore>();
  const [firstSwiper] = useState<SwiperClass>();
  const [secondSwiper] = useState<SwiperClass>();
  const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
  const swiper2Ref = useRef();

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      // @ts-ignore
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);
  return (
    <DetailSwiperSC className="swiper-wrapper">
      <div className="swiper-container">
        <Swiper
          onSwiper={swiper => {
            if (swiper1Ref.current !== null) {
              // @ts-ignore
              swiper1Ref.current = swiper;
            }
          }}
          controller={{ control: secondSwiper }}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          className="main-swiper"
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs, Controller]}
        >
          {carDetailData.result.images.map(car => (
            <SwiperSlide key={car} className="main-slide">
              <Image
                src={car}
                width={300}
                height={300}
                alt="for-sale"
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          controller={{ control: firstSwiper }}
          loop={false}
          spaceBetween={10}
          slidesPerView={'auto'}
          slideToClickedSlide={true}
          onSwiper={setThumbsSwiper}
          modules={[Navigation, Thumbs, Controller]}
          className="small-swiper"
        >
          {carDetailData.result.images.map(car => (
            <SwiperSlide key={car} className="small-slide">
              <Image
                src={car}
                width={70}
                height={70}
                alt="for-sale"
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </DetailSwiperSC>
  );
};

export default DetailSwiper;
