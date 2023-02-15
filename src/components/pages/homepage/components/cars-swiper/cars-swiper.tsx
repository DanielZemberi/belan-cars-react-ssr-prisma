import { ICar } from '@/dto/car';
import React from 'react';
import { CarsSwiperSC } from './cars-swiper.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import Link from 'next/link';

interface CarsSwiperProps {
  cars: ICar[];
}

const CarsSwiper: React.FC<CarsSwiperProps> = ({ cars }) => {
  return (
    <CarsSwiperSC>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          dynamicBullets: true
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {cars.map(car => (
          <Link key={car.id} href={car.detailUrl}>
            <SwiperSlide key={car.id}>
              <div className="img-wrapper">
                <Image
                  src={car.previewImg}
                  alt="car"
                  width={200}
                  height={200}
                />
              </div>
              <div className="title-wrapper">
                <p>{car.title}</p>
              </div>
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
    </CarsSwiperSC>
  );
};

export default CarsSwiper;
