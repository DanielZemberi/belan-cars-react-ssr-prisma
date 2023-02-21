import ContentWrapper from '@/components/ui/content-wrapper';
import Image from 'next/image';
import React from 'react';
import { HeroSC } from './hero.styled';

const Hero: React.FC = () => {
  return (
    <ContentWrapper>
      <HeroSC>
        <div className="divider" />
        <div className="img-wrapper">
          <Image
            src="/assets/belancars-text.png"
            alt="belancars"
            width={768}
            height={145}
          />
        </div>
        <h1 className="desktop">PNEUSERVIS • AUTOSERVIS • PREDAJ ÁUT</h1>
        <h1 className="mobile">
          PNEUSERVIS <br /> AUTOSERVIS <br /> PREDAJ ÁUT
        </h1>

        <div className="divider" />
      </HeroSC>
    </ContentWrapper>
  );
};

export default Hero;
