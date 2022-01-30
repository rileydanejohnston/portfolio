import React from 'react';
import { Text } from '../Home/styledHome';
import { AboutWrapper, AuthorImage, TextWrapper} from './styledAbout';
import authImg from '../../images/riley-og.png';

export default function About() {
  return (
    <AboutWrapper>
      <AuthorImage 
        src={authImg}
        alt='Riley Johnston, creator of this site'
      />
      <TextWrapper>
        <Text>I grew up in White Bear Lake, Minnesota. I went to school in South Carolina. I moved to Los Angeles, California to work in film after college. Now I live outside Austin, TX.</Text>
        <Text>I like movies, books, shows, video games and anything else with a good story. My favorite genre is Sci-fi. My favorite movie is Aliens. The last book I read was Dune. I'm currently watch Ted Lasso.</Text>
        <Text>I'm also into</Text>
      </TextWrapper>
    </AboutWrapper>
  );
}
