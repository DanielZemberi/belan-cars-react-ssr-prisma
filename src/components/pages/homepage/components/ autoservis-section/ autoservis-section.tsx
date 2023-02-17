import Divider from '@/components/ui/divider';
import OverlayWrapper from '@/components/ui/overlay-wrapper';
import Image from 'next/image';
import React from 'react';
import { AutoservisSectionSC } from './ autoservis-section.styled';

const AutoservisSection: React.FC = () => {
  return (
    <OverlayWrapper>
      <AutoservisSectionSC>
        <h2 className="title">AUTOSERVIS</h2>
        <Image
          src="/assets/belancars-logo-servis.png"
          width={150}
          height={150}
          alt="autoservis"
        />
        <p className="claim">
          <b>BELAN CARS & SERVIS</b> – to je spoľahlivý a zodpovedný partner pre
          veľké množstvo opravárenských a údržbových činností, hlavne osobných
          aút. Diagnostika na počkanie je samozrejmosťou. Štandardne vymieňame
          motorový olej a olej v automatických a manuálnych prevodovkách.
          Vymeníme všetky filtre v aute (olejový, vzduchový, palivový a
          kabínový). Meníme brzdové kotúče, platničky a nápravové diely.
          Opravujeme výfukové segmenty, DPF filtre a AdBlue zariadenia.
          Montujeme ťažné zariadenia. Za výhodných podmienok ponúkame široký
          sortiment náhradných dielov a autobatérií. Priestory autoservisu sú na
          Zvolenskej ceste v Lučenci.
        </p>
        <Divider spacing="lg" />
        <Image
          src="/assets/belancars-logo-webber-autobattery.png"
          width={512}
          height={250}
          alt="autoservis"
        />
        <div id="autoservis" style={{ position: 'absolute', top: '-160px' }} />
      </AutoservisSectionSC>
    </OverlayWrapper>
  );
};

export default AutoservisSection;
