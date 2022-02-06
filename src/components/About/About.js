import React from 'react';
import { Text } from '../Home/styledHome';
import { AboutWrapper, AuthorImage, TextWrapper} from './styledAbout';
import authImg from '../../images/riley-og.png';
import { aboutData } from '../../constants/about';
const {
  beginning,
  webPreferences,
  farmApp,
  goals,
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
        <Text>{beginning}</Text>
        <Text>{webPreferences}</Text>
        <Text>{farmApp}</Text>
        <Text>{goals}</Text>
        <Text>{places}</Text>
        <Text> {college}</Text>
        <Text>{movies}</Text>
        <Text>{bike}</Text>
      </TextWrapper>
    </AboutWrapper>
  );
}
