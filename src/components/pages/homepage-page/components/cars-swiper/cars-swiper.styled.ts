import styled from 'styled-components';

export const CarsSwiperSC = styled.div`
  text-align: center;
  position: relative;

  .title {
    padding-bottom: 40px;
  }

  .subtitle {
    padding-bottom: 20px;
  }

  a {
    cursor: pointer;
  }
  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: auto;
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.bg.secondary};
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.bg.secondary};
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .img-wrapper {
    width: 100%;
  }

  .title-wrapper {
    text-align: left;
    margin-top: 10px;
  }
`;
