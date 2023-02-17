import { ICar } from '@/dto/car';
import React from 'react';
import AutoservisSection from '../homepage/components/ autoservis-section';
import ContactSection from '../homepage/components/contact-section';
import Hero from '../homepage/components/hero';
import PneuservisSection from '../homepage/components/pneuservis-seciton';
import CarsSwiper from './components/cars-swiper';
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
