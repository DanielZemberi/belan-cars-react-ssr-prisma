import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { prisma } from '../services/internal';
import React from 'react';
import { ICar } from '@/dto/car';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Homepage from '@/components/pages/homepage-page';

interface HomeProps {
  cars: ICar[];
}

const Home: NextPage<HomeProps> = ({ cars }) => {
  return (
    <>
      <Head>
        <title>Belan Cars | PNEUSERVIS | AUTOSERVIS | AUTOBAZÁR</title>
        <meta
          name="description"
          content="Belan cars - ten správny partner pri kúpe jazdených áut či dovozu áut na objednávku, široký sortiment pneumatík rôznych značiek, opravárenských a údržbových činností, hlavne osobných aút. Diagnostika na počkanie."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/assets/belancars-logo.png" />
        <meta
          property="og:title"
          content={`Belan Cars | PNEUSERVIS | AUTOSERVIS | AUTOBAZÁR`}
        />
        <meta
          property="og:description"
          content="Belan cars - ten správny partner pri kúpe jazdených áut či dovozu áut na objednávku, široký sortiment pneumatík rôznych značiek, opravárenských a údržbových činností - hlavne osobných aút. Diagnostika na počkanie."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage cars={cars} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const cars = await prisma.car.findMany();

  console.log('CARS', cars);

  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'homepage'])),
      cars: cars ?? []
    }
  };
};

export default Home;
