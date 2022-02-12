import rileyPic from '../../images/riley-formal.PNG';
import React from 'react';
import {
  HomeWrapper,
  HomeContent,
  TextWrapper,
  Title,
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
          <Text>software engineer</Text>
          <PopupText
            onClick={openTech}
          >technologies</PopupText>
        </TextWrapper>
        <AuthorImg 
          src={rileyPic}
          alt='Riley Johnston - creator of this site'
        />
      </HomeContent>
    </HomeWrapper>
  );
}
