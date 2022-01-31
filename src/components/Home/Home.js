import { Text } from './styledHome';
import React from 'react';
import { HomeWrapper } from './styledHome';
import { homeData } from '../../constants/home';
const {
  beginning,
  webPreferences,
  farmApp,
  goals
} = homeData;

export default function Home() {
  return (
    <HomeWrapper>
      <Text>{beginning}</Text>
      <Text>{webPreferences}</Text>
      <Text>{farmApp}</Text>
      <Text>{goals}</Text>
    </HomeWrapper>
  );
}
