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
import OverlayWrapper from '@/components/ui/overlay-wrapper';
import formatDetailLink from '@/helpers/formatDetailLink';

interface CarsSwiperProps {
  cars: ICar[];
}

const CarsSwiper: React.FC<CarsSwiperProps> = ({ cars }) => {
  return (
    <OverlayWrapper>
      <CarsSwiperSC>
        <h2 className="title">AKTUÁLNA PONUKA VOZIDIEL</h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            dynamicBullets: true
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            200: {
              slidesPerView: 1
            },
            576: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 3
            },
            991: {
              slidesPerView: 4
            },
            1200: {
              slidesPerView: 5
            }
          }}
          className="mySwiper"
        >
          {cars.map(car => (
            <SwiperSlide key={car.id}>
              <Link
                href={{
                  pathname: '/detail',
                  query: { car: formatDetailLink(car.detailUrl) }
                }}
              >
                <>
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
                </>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          src="/assets/belancars-logo-deal.png"
          width={300}
          height={300}
          alt="deal"
        />
        <h2 className="subtitle">Predaj áut</h2>
        <p className="claim">
          <b>BELAN CARS & SERVIS</b> - to je ten správny partner pri kúpe
          jazdených áut či dovozu áut na objednávku. Vozidlá pred kúpou a
          predajom preverujeme v medzinárodných databázach a kontrolujeme
          skúsenými technikmi. S nami môžete rátať aj pri prepise auta a
          ostatných administratívnych úkonoch (napr. pri externom financovaní a
          podobne).
        </p>
        <div id="ponuka" style={{ position: 'absolute', top: '-160px' }} />
      </CarsSwiperSC>
    </OverlayWrapper>
  );
};

export default CarsSwiper;
