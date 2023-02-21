import styled from 'styled-components';

export const SidemenuSC = styled.div`
  position: fixed;
  inset: 0;
  top: 80px;
  background: ${({ theme }) => theme.colors.bg.overlay};
  padding: 20px;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      width: 100%;
      text-align: center;
    }
  }
`;
