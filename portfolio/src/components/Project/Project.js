import React from 'react';
import { Button, ButtonWrapper, Feature, FeatureSpan, FeatureWrapper, Image, InfoWrapper, ProjectWrapper, Summary, TextWrapper, Title } from './styledProject';
import aroundImg from '../../images/around-main-page.png';

export default function Project() {

  const aroundLive = 'www.around-the-us.students.nomoreparties.site';
  const aroundDemo = 'https://www.loom.com/share/d4e0d3b5ecb145a9a897f135fe692965';
  const aroundRepo = 'https://github.com/rileydanejohnston/react-around-api-full';

  const handleRedirect = (link) => {
    window.open(link, '_blank');
  }


  return (
    <ProjectWrapper>
      <InfoWrapper>
        <TextWrapper>
          <Title>Around The U.S.</Title>
          <Summary>A social media site where users create accounts, post photos, and interact with other user's photos.</Summary>
          <FeatureWrapper>
            <Feature>
              <FeatureSpan>Frontend features done with React and styled-components:</FeatureSpan> JSON web tokens, hooks, functional components and conditional rendering
            </Feature>
            <Feature>
              <FeatureSpan>Backend is Express.js, Node.js, and MongoDB:</FeatureSpan> celebrate/Joi, password hashing, centralized error handling, logging, request limiter, helmet and cors
            </Feature>
          </FeatureWrapper>
        </TextWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleRedirect(aroundDemo)}>
            Demo
          </Button>
          <Button onClick={() => handleRedirect(aroundRepo)}>
            Code
          </Button>
        </ButtonWrapper>
      </InfoWrapper>
      <Image 
        src={aroundImg}
        alt='Around The U.S. home page'
        onClick={() => handleRedirect(aroundLive)}
      />
    </ProjectWrapper>
  )
}
