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

  /* 
    I became a software engineer to turn exciting ideas into a reality. I'm interested in solving problems, helping people, protecting the environment, and contributing to the world.
  */
  return (
    <HomeWrapper>
      <HomeContent>
        <TextWrapper>
          <Title>Riley Johnston</Title>
          <SubtitleWrapper>
            <Text>software engineer</Text>
            <PopupText onClick={openTech}>technologies</PopupText>
          </SubtitleWrapper>
          <Summary>I became a software engineer to turn exciting ideas into a reality. I'm interested in solving problems, helping people, protecting the environment, and contributing to the world.</Summary>
        </TextWrapper>
        <AuthorImg 
          src={rileyPic}
          alt='Riley Johnston - creator of this site'
        />
      </HomeContent>
    </HomeWrapper>
  );
}
