import { ICar } from '@/dto/car';
import React from 'react';
import CarsSwiper from './components/cars-swiper';
import { HomepageSC } from './homepage.styled';

interface HomepageProps {
  cars: ICar[];
}

const Homepage: React.FC<HomepageProps> = ({ cars }) => {
  return <HomepageSC>{/* <CarsSwiper cars={cars} /> */}</HomepageSC>;
};

export default Homepage;
