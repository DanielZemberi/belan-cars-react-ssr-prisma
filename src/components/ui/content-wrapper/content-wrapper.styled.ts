import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 0 40px;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakPoints.lg}px) {
    padding: 0 20px;
  }
`;
