import React from 'react';
import { InfoBoxSC } from './info-box.styled';
import { FaBeer } from 'react-icons/fa';
import { IGetCarDetailResponse } from '@/dto/car';

interface InfoBoxProps {
  info: IGetCarDetailResponse['result'];
}

const InfoBox: React.FC<InfoBoxProps> = ({ info }) => {
  return (
    <InfoBoxSC className="info-box-wrapper">
      <h2>{info.title}</h2>
      {info.description.map((i, index) => (
        <p key={index}>{i}</p>
      ))}
    </InfoBoxSC>
  );
};

export default InfoBox;
