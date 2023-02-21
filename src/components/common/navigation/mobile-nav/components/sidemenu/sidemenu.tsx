import React from 'react';
import { SidemenuSC } from './sidemenu.styled';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';

interface SidemenuProps {
  visible: boolean;
  toggleOpen: (open?: boolean) => void;
}
const Sidemenu: React.FC<SidemenuProps> = ({ visible, toggleOpen }) => {
  const nodeRef = React.useRef(null);

  const handleClose = React.useCallback(() => {
    toggleOpen(false);
  }, [toggleOpen]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={visible}
      timeout={300}
      classNames="my-node"
      unmountOnExit
    >
      <SidemenuSC ref={nodeRef}>
        <nav>
          <Link onClick={handleClose} href="/">
            Domov
          </Link>
          <Link onClick={handleClose} scroll={false} href="#ponuka">
            Predaj áut
          </Link>
          <Link onClick={handleClose} scroll={false} href="#pneuservis">
            Pneuservis
          </Link>
          <Link onClick={handleClose} scroll={false} href="#autoservis">
            Autoservis
          </Link>
          <Link onClick={handleClose} scroll={false} href="#kontakt">
            Kontakt
          </Link>
        </nav>
      </SidemenuSC>
    </CSSTransition>
  );
};

export default Sidemenu;
