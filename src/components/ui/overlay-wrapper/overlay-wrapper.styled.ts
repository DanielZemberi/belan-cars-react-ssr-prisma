import styled from 'styled-components';

export const OverlayWrapperSC = styled.div`
  background: ${({ theme }) => theme.colors.bg.darkOverlay};
  padding: 40px 0;
  backdrop-filter: blur(2px);
  .title {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.lg}px) {
    .claim {
      text-align: left;
    }
  }
`;
