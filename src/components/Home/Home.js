import rileyPic from '../../images/riley-formal.PNG';
import React from 'react';
import {
  HomeWrapper,
  HomeContent,
  TextWrapper,
  Title,
  SubtitleWrapper,
  Text,
  AuthorImg,
  PopupText
} from './styledHome';


export default function Home({ openTech }) {
  return (
    <HomeWrapper>
      <HomeContent>
        <TextWrapper>
          <Title>Riley Johnston</Title>
          <SubtitleWrapper>
            <Text>software engineer</Text>
            <PopupText onClick={openTech}>technologies</PopupText>
          </SubtitleWrapper>
        </TextWrapper>
        <AuthorImg 
          src={rileyPic}
          alt='Riley Johnston - creator of this site'
        />
      </HomeContent>
    </HomeWrapper>
  );
}
