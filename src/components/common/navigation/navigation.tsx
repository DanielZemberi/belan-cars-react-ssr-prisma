import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { NavigationSC } from './navigation.styled';
import MobileNav from './mobile-nav';

const Navigation: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <NavigationSC>
      <div className="nav-wrapper">
        <div className="logo-wrapper">
          <Link href="/">
            <Image
              src="/assets/belancars-logo.png"
              width={350}
              height={80}
              alt="belan cars"
            />
          </Link>
        </div>

        <nav className="mobile-nav">
          <Link href="/">Domov</Link>
          <Link scroll={false} href="#ponuka">
            Predaj áut
          </Link>
          <Link scroll={false} href="#pneuservis">
            Pneuservis
          </Link>
          <Link scroll={false} href="#autoservis">
            Autoservis
          </Link>
          <Link scroll={false} href="#kontakt">
            Kontakt
          </Link>
        </nav>
        <MobileNav />
      </div>
    </NavigationSC>
  );
};

export default Navigation;
