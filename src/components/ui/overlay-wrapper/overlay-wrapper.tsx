import React from 'react';
import ContentWrapper from '../content-wrapper';
import { OverlayWrapperSC } from './overlay-wrapper.styled';

interface OverlayWrapperProps {
  children: React.ReactNode;
}

const OverlayWrapper: React.FC<OverlayWrapperProps> = ({ children }) => {
  return (
    <OverlayWrapperSC>
      <ContentWrapper>{children}</ContentWrapper>
    </OverlayWrapperSC>
  );
};

export default OverlayWrapper;
