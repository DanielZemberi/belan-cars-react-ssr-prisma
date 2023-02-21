import React from 'react';
import Navigation from '../navigation';
import { BaseLayoutSC } from './base-layout.styled';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <BaseLayoutSC>
      <Navigation />
      <main>{children}</main>
    </BaseLayoutSC>
  );
};

export default BaseLayout;
