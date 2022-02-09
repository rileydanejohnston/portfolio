import React from 'react';
import { Text } from '../Home/styledHome';
import { AboutWrapper, AuthorImage, TextWrapper} from './styledAbout';
import authImg from '../../images/riley-og.png';
import { aboutData } from '../../constants/about';
const {
  beginning,
  webDev,
  goals,
  education,
  college,
  movies,
  bike
} = aboutData;

export default function About() {
  return (
    <AboutWrapper>
      <AuthorImage 
        src={authImg}
        alt='Riley Johnston, creator of this site'
      />
      <TextWrapper>
        <Text>{beginning}</Text>
        <Text>{goals}</Text>
        <Text>{webDev}</Text>
        <Text>{education}</Text>
      </TextWrapper>
    </AboutWrapper>
  );
}
