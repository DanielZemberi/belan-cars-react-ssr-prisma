import React from 'react';
import { InfoBoxSC } from './info-box.styled';
import { IGetCarDetailResponse } from '@/dto/car';

interface InfoBoxProps {
  info: IGetCarDetailResponse['result'];
  bazosUrl: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ info, bazosUrl }) => {
  return (
    <InfoBoxSC className="info-box-wrapper">
      <h2>{info.title}</h2>
      <h4 className="link">
        Otvoriť na
        <span>
          <a href={bazosUrl} rel="noopener noreferrer" target="_blank">
            bazos.sk
          </a>
        </span>
      </h4>
      {info.description.map((i, index) => (
        <p key={index}>{i}</p>
      ))}
    </InfoBoxSC>
  );
};

export default InfoBox;
