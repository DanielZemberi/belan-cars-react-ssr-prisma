import styled from 'styled-components';

export const HomepageSC = styled.div`
  .sections-wrapper {
    display: flex;
    flex-direction: column;
    gap: 120px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.lg}px) {
    .sections-wrapper {
      gap: 60px;
    }
  }
`;
