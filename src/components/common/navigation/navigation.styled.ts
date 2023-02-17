import styled from 'styled-components';

export const NavigationSC = styled.div`
  background: ${({ theme }) => theme.colors.bg.overlay};
  display: flex;
  justify-content: center;
  padding: 8px 0;

  .nav-wrapper {
    max-width: 1600px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }

  nav {
    display: flex;
    gap: 20px;

    a {
      color: ${({ theme }) => theme.colors.text.primary};
      position: relative;
      z-index: 0;
      padding: 0 4px;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.text.secondary};
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        background: ${({ theme }) => theme.colors.bg.secondary};
        bottom: 0;
        left: 0;
        top: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
        z-index: -1;
      }

      &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }
`;
