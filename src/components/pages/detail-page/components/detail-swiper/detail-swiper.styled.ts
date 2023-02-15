import styled from 'styled-components';

export const DetailSwiperSC = styled.div`
  max-width: 100%;

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

  .main-swiper {
    width: 100%;
    height: 500px;
  }
  .small-swiper {
    height: auto;
    margin-top: 20px;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
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
