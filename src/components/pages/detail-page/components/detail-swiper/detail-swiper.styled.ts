import styled from 'styled-components';

export const DetailSwiperSC = styled.div`
  .swiper-container {
    max-width: 100%;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.bg.secondary};
  }

  .main-swiper {
    width: 100%;
    height: auto;
  }
  .small-swiper {
    height: auto;
    margin-top: 20px;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .main-slide {
    background: red;
    height: fit-content;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .small-slide {
    max-width: 150px;
    aspect-ratio: 1;
    height: auto;
    justify-content: flex-start;
    background: black;

    img {
      object-fit: cover;
    }
  }
`;
