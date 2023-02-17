import styled from 'styled-components';

export const DividerSC = styled.div<{
  spacing: 'sm' | 'lg';
  color: 'primary' | 'secondary';
}>`
  height: 1px;
  width: 100%;
  margin: ${({ spacing }) => (spacing === 'sm' ? '20px 0' : '40px 0')};
  background: ${({ color, theme }) =>
    color === 'primary' ? theme.colors.bg.primary : theme.colors.bg.secondary};
`;
