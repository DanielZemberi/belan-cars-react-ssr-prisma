import styled from 'styled-components';

export const InfoBoxSC = styled.div`
  background: ${({ theme }) => theme.colors.bg.darkOverlay};
  padding: 40px;

  p {
    padding-bottom: 20px;
  }

  h2 {
    padding-bottom: 20px;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  .link {
    padding-bottom: 40px;

    a {
      color: ${({ theme }) => theme.colors.text.tertiary};
      padding-left: 7px;
      text-decoration: underline;
    }
  }
`;
