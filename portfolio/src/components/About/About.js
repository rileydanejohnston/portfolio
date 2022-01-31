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
        <Text>I grew up in Minnesota. I earned a Bachelor of Science in Business Administration from the University of South Carolina. After college, I moved to California, where I worked in the film industry as a camera assistant. I've lived in Austin, Texas, since 2021.</Text>
        <Text> I started studying computer science at Glendale Community College in August 2020. I plan to continue my education at Oregon State University.</Text>
        <Text>I like movies, books, shows, video games, and anything with a great story. My favorite movie is Aliens. The last book I read was Dune. I'm currently watching Ted Lasso.</Text>
        <Text>I also like riding my bike. I bought a Trek hybrid when I moved to Texas, so I've been spending my time riding in the country. The best part about it is seeing the horses and cows. The worst part is getting chased by dogs.</Text>
      </TextWrapper>
    </AboutWrapper>
  );
}
