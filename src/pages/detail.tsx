import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import axios from 'axios';
import { IGetCarDetailResponse } from '@/dto/car';
import DetailPage from '@/components/pages/detail-page';

interface DetailProps {
  carDetailData: IGetCarDetailResponse;
  bazosUrl: string;
}

const Detail: NextPage<DetailProps> = ({ carDetailData, bazosUrl }) => {
  return (
    <>
      <Head>
        <title>Belan Cars | {carDetailData.result.title}</title>
        <meta
          name="description"
          content={carDetailData.result.description.slice(0, 150).toString()}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={carDetailData.result.images[0]} />
        <meta property="og:description" content={carDetailData.result.title} />
        <meta
          property="og:title"
          content={`Belan cars | ${carDetailData.result.title}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DetailPage carDetailData={carDetailData} bazosUrl={bazosUrl} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const bazosUrl = 'https://auto.bazos.sk/inzerat/' + query.car;

  const res = await axios.post(`/api/getProductDetail`, {
    url: query.car
  });

  return {
    props: {
      carDetailData: res.data,
      bazosUrl: bazosUrl
    }
  };
};

export default Detail;
