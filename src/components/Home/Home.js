import { Text, Title } from './styledHome';
import React from 'react';
import { HomeWrapper } from './styledHome';


export default function Home() {
  return (
    <HomeWrapper>
      <Title>Hi, I'm Riley Johnston</Title>
      <Text>I'm a software engineer.</Text>
    </HomeWrapper>
  );
}
