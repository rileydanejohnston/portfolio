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
  PopupText,
  Summary
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
          <Summary>I'm passionate about turning exciting ideas into reality. My main tools are React, Styled-Components, Node.js, Express.js, and MongoDB.</Summary>
        </TextWrapper>
        <AuthorImg 
          src={rileyPic}
          alt='Riley Johnston - creator of this site'
        />
      </HomeContent>
    </HomeWrapper>
  );
}
