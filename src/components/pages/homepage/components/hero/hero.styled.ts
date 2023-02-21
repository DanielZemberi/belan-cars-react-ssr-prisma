import styled from 'styled-components';

export const HeroSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  margin: 70px 0;

  .divider {
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors.bg.secondary};
  }

  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
    padding-bottom: 40px;
  }

  .img-wrapper {
    display: flex;
    padding-top: 40px;
    justify-content: center;
  }

  .mobile {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.lg}px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
      align-self: flex-start;
      padding-top: 20px;
    }
  }
`;
