import { IGetCarDetailResponse } from '@/dto/car';
import React from 'react';
import DetailSwiper from './components/detail-swiper';
import { DetailPageSC } from './detail-page.styled';

interface DetailPageProps {
  carDetailData: IGetCarDetailResponse;
}

const DetailPage: React.FC<DetailPageProps> = ({ carDetailData }) => {
  return (
    <DetailPageSC>
      <DetailSwiper carDetailData={carDetailData} />
    </DetailPageSC>
  );
};

export default DetailPage;
