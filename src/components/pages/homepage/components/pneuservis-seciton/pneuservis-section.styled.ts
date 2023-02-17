import styled from 'styled-components';

export const PneuservisSectionSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  .claim {
    padding-bottom: 40px;
  }

  .divider {
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors.bg.primary};
  }
`;
