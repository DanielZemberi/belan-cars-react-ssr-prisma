import styled from 'styled-components';

export const InfoBoxSC = styled.div`
  background: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: 20px;
  padding: 24px;

  p {
    padding-bottom: 20px;
  }

  h2 {
    padding-bottom: 20px;
  }
`;
