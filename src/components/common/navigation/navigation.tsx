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
          <Link href="/">
            <Image
              src="/assets/belancars-logo.png"
              width={350}
              height={80}
              alt="belan cars"
            />
          </Link>
        </div>

        <nav>
          <Link href="/">{t('nav.home')}</Link>
          <Link scroll={false} href="#ponuka">
            {t('nav.car_sale')}
          </Link>
          <Link scroll={false} href="#pneuservis">
            {t('nav.pneuservis')}
          </Link>
          <Link scroll={false} href="#autoservis">
            {t('nav.autoservis')}
          </Link>
          <Link scroll={false} href="#kontakt">
            {t('nav.contact')}
          </Link>
        </nav>
      </div>
    </NavigationSC>
  );
};

export default Navigation;
