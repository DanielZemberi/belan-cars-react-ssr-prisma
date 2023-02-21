import ContentWrapper from '@/components/ui/content-wrapper';
import { IGetCarDetailResponse } from '@/dto/car';
import React from 'react';
import DetailSwiper from './components/detail-swiper';
import InfoBox from './components/info-box';
import { DetailPageSC } from './detail-page.styled';

interface DetailPageProps {
  carDetailData: IGetCarDetailResponse;
  bazosUrl: string;
}

const DetailPage: React.FC<DetailPageProps> = ({ carDetailData, bazosUrl }) => {
  return (
    <ContentWrapper>
      <DetailPageSC>
        <DetailSwiper carDetailData={carDetailData} />
        <InfoBox info={carDetailData.result} bazosUrl={bazosUrl} />
      </DetailPageSC>
    </ContentWrapper>
  );
};

export default DetailPage;
