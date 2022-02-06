import { Image } from 'antd';
import rileyPic from '../../images/riley-formal.PNG';
import React from 'react';
import {
  HomeWrapper,
  HomeContent,
  TextWrapper,
  Title,
  Text,
  AuthorImg
} from './styledHome';


export default function Home() {
  return (
    <HomeWrapper>
      <HomeContent>
        <TextWrapper>
          <Title>Riley Johnston</Title>
          <Text>software engineer</Text>
        </TextWrapper>
        <AuthorImg 
          src={rileyPic}
          alt='Riley Johnston - creator of this site'
        />
      </HomeContent>
    </HomeWrapper>
  );
}
