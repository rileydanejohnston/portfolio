import React from 'react';
import authImg from '../../images/riley-og.png';
import { aboutData } from '../../constants/about';
import {
  AboutWrapper,
  AuthorImage,
  TextWrapper,
  Group,
  Title,
  Text
} from './styledAbout';
const {
  beginning,
  webDev,
  goals,
  education,
} = aboutData;

export default function About() {
  return (
    <AboutWrapper>
      <TextWrapper>
        <Group>
          <Title>why programming</Title>
          <Text>{beginning}</Text>
          <Text>{goals}</Text>
        </Group>
        <Group>
          <Title>why web development</Title>
          <Text>{webDev}</Text>
        </Group>
        <Group>
          <Title>education</Title>
          <Text>{education}</Text>
        </Group>
      </TextWrapper>
      <AuthorImage 
        src={authImg}
        alt='Riley Johnston, creator of this site'
      />
    </AboutWrapper>
  );
}
