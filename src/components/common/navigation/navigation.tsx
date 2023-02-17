import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { NavigationSC } from './navigation.styled';

const Navigation: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <NavigationSC>
      <div className="nav-wrapper">
        <div className="logo-wrapper">
          <Image
            src="/assets/belancars-logo.png"
            width={350}
            height={80}
            alt="belan cars"
          />
        </div>

        <nav>
          <Link href="#ponuka">{t('nav.home')}</Link>
          <Link href="#pneuservis">{t('nav.pneuservis')}</Link>
          <Link href="#autoservis">{t('nav.autoservis')}</Link>
          <Link href="#kontakt">{t('nav.contact')}</Link>
        </nav>
      </div>
    </NavigationSC>
  );
};

export default Navigation;
