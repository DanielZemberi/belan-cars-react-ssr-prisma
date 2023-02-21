import styled from 'styled-components';

export const DetailPageSC = styled.div`
  display: flex;
  gap: 30px;
  display: flex;
  justify-content: center;
  padding: 80px 0;

  .swiper-wrapper {
    width: 40%;
  }

  .info-box-wrapper {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.lg}px) {
    flex-direction: column;

    .swiper-wrapper,
    .info-box-wrapper {
      width: 100%;
    }
  }
`;
