import React from 'react';
import { Text } from '../Home/styledHome';
import { AboutWrapper, AuthorImage, TextWrapper} from './styledAbout';
import authImg from '../../images/riley-og.png';
import { aboutData } from '../../constants/about';
const {
  places,
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
        <Text>{places}</Text>
        <Text> {college}</Text>
        <Text>{movies}</Text>
        <Text>{bike}</Text>
      </TextWrapper>
    </AboutWrapper>
  );
}
