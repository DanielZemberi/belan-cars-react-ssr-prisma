import Divider from '@/components/ui/divider';
import OverlayWrapper from '@/components/ui/overlay-wrapper';
import Image from 'next/image';
import React from 'react';
import { PneuservisSectionSC } from './pneuservis-section.styled';

const PneuservisSection: React.FC = () => {
  return (
    <OverlayWrapper>
      <PneuservisSectionSC>
        <h2 className="title">PNEUSERVIS</h2>
        <Image
          src="/assets/belancars-logo-pneuservis.png"
          width={300}
          height={300}
          alt="pneuservis"
        />
        <p className="claim">
          <b>BELAN CARS & SERVIS</b> – to je rýchly a spoľahlivý partner pre
          široký sortiment pneumatík rôznych značiek, individuálne aj flotilové
          prezúvanie a samozrejme uskladnenie sezónneho prezutia a to všetko už
          od 20 EUR bez DPH. Objednajte si termín na telefónnom čísle 0911 253
          253.
        </p>
        <Image
          src="/assets/belancars-mikona-partner-logo.png"
          width={300}
          height={127}
          alt="deal"
        />
        <Divider />
        <Image
          src="/assets/belancars-loga-pneu.png"
          width={1024}
          height={51}
          alt="deal"
        />
        <div id="pneuservis" style={{ position: 'absolute', top: '-160px' }} />
      </PneuservisSectionSC>
    </OverlayWrapper>
  );
};

export default PneuservisSection;
