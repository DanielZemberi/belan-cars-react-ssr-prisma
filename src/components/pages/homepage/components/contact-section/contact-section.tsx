import Divider from '@/components/ui/divider';
import OverlayWrapper from '@/components/ui/overlay-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ContactSectionSC } from './contact-section.styled';

const ContactSection: React.FC = () => {
  return (
    <OverlayWrapper>
      <ContactSectionSC>
        <h2 className="title">KONTAKT</h2>
        <Image
          src="/assets/belancars-logo-kontakt.png"
          width={250}
          height={250}
          alt="contact"
        />
        <Divider spacing="lg" />
        <div className="address-block">
          <p>Adresa:</p>
          <h3>ZVOLENSKÁ CESTA 42, LUČENEC</h3>
        </div>
        <div className="phone-block">
          <p>Telefónne čislo:</p>
          <Link href="tel:+421911253253">
            <h3>0911 253 253</h3>
          </Link>
        </div>
        <Divider spacing="lg" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.9108337454736!2d19.656734916241085!3d48.343019179240336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ff8ee7c34d971%3A0xa682b918b756e6dc!2sZvolensk%C3%A1%20cesta%201800%2F42%2C%20984%2001%20Lu%C4%8Denec!5e0!3m2!1sen!2ssk!4v1676639974302!5m2!1sen!2ssk"
          width="100%"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Image
          src="/assets/belancars-icon.png"
          width={130}
          height={130}
          alt="belancars-logo-icon"
        />
        <div className="copyright">
          <p>
            <b>BELAN CARS s.r.o.</b>
          </p>
          <p>108 Podrečany 985 54</p>
          <p>IČO 52 272 613</p>
        </div>
        <div id="kontakt" style={{ position: 'absolute', top: '-160px' }} />
      </ContactSectionSC>
    </OverlayWrapper>
  );
};

export default ContactSection;
