import { ICar } from '@/dto/car';
import React from 'react';
import AutoservisSection from './components/ autoservis-section';
import CarsSwiper from './components/cars-swiper';
import ContactSection from './components/contact-section';
import Hero from './components/hero';
import PneuservisSection from './components/pneuservis-seciton';
import { HomepageSC } from './homepage.styled';

interface HomepageProps {
  cars: ICar[];
}

const Homepage: React.FC<HomepageProps> = ({ cars }) => {
  return (
    <HomepageSC>
      <Hero />
      <div className="sections-wrapper">
        <CarsSwiper cars={cars} />
        <PneuservisSection />
        <AutoservisSection />
        <ContactSection />
      </div>
    </HomepageSC>
  );
};

export default Homepage;
