import { CloseCross, HamburgerMenu } from '@/icons';
import React from 'react';
import Sidemenu from './components/sidemenu';
import { MobileNavSC } from './mobile-nav.styled';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = React.useCallback((open?: boolean) => {
    setIsOpen(prev => open ?? !prev);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }
  }, [isOpen]);

  return (
    <MobileNavSC className="mobile-nav-wrapper">
      {isOpen ? (
        <button onClick={() => toggleOpen(false)} className="close-icon">
          <CloseCross width={30} height={30} />
        </button>
      ) : (
        <button onClick={() => toggleOpen(true)}>
          <HamburgerMenu width={30} height={30} />
        </button>
      )}
      <Sidemenu visible={isOpen} toggleOpen={toggleOpen} />
    </MobileNavSC>
  );
};

export default MobileNav;
