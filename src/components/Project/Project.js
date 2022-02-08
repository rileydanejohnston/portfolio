import React from 'react';
import { Button, ButtonWrapper, Feature, FeatureWrapper, Image, InfoWrapper, ProjectWrapper, Summary, TextWrapper, Title } from './styledProject';

export default function Project({
  title,
  summary,
  features,
  liveLink,
  demoLink,
  repoLink,
  image,
  altText
}) {

  const handleRedirect = (link) => {
    window.open(link, '_blank');
  }

  return (
    <ProjectWrapper>
      <InfoWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
          <FeatureWrapper>
            {
              features.map((item) => {
                return (
                  <Feature>
                    {item}
                  </Feature>
                )
              })
            }
          </FeatureWrapper>
        </TextWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleRedirect(demoLink)}>
            Demo
          </Button>
          <Button onClick={() => handleRedirect(repoLink)}>
            Details
          </Button>
        </ButtonWrapper>
      </InfoWrapper>
      <Image 
        src={image}
        alt={altText}
        onClick={() => handleRedirect(liveLink)}
      />
    </ProjectWrapper>
  )
}
