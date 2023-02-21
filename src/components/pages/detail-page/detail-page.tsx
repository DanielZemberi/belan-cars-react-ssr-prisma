import ContentWrapper from '@/components/ui/content-wrapper';
import { IGetCarDetailResponse } from '@/dto/car';
import React from 'react';
import DetailSwiper from './components/detail-swiper';
import InfoBox from './components/info-box';
import { DetailPageSC } from './detail-page.styled';

interface DetailPageProps {
  carDetailData: IGetCarDetailResponse;
}

const DetailPage: React.FC<DetailPageProps> = ({ carDetailData }) => {
  return (
    <ContentWrapper>
      <DetailPageSC>
        <DetailSwiper carDetailData={carDetailData} />
        <InfoBox info={carDetailData.result} />
      </DetailPageSC>
    </ContentWrapper>
  );
};

export default DetailPage;
