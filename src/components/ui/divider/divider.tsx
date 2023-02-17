import React from 'react';
import { DividerSC } from './divider.styled';

interface DividerProps {
  className?: string;
  spacing?: 'sm' | 'lg';
  color?: 'primary' | 'secondary';
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = ({
  spacing = 'sm',
  color = 'primary',
  ...rest
}) => {
  return <DividerSC spacing={spacing} color={color} {...rest} />;
};

export default Divider;
