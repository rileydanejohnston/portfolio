import React from 'react';
import { Button, ButtonWrapper, Feature, FeatureSpan, FeatureWrapper, Image, InfoWrapper, ProjectWrapper, Summary, TextWrapper, Title } from './styledProject';

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
              features.map(({ featTitle, featInfo}) => {
                return (
                  <Feature>
                    <FeatureSpan>{featTitle}</FeatureSpan> {featInfo}
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
            Code
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
