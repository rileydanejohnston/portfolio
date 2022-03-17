import React from 'react';
import Project from '../Project/Project';
import { ProjectList, ProjectSection } from './styledProjects';
import { projectData } from '../../constants/project';
import uniqueId from 'lodash.uniqueid';

export default function Projects() {

  return (
    <ProjectSection>
      <ProjectList>
        {
          projectData.map(({ title, summary, features, liveLink, demoLink, repoLink, image, altText }) => {
            return (
              <Project
                key={uniqueId(`${title}_`)}
                title={title}
                summary={summary}
                features={features}
                liveLink={liveLink}
                demoLink={demoLink}
                repoLink={repoLink}
                image={image}
                altText={altText}
              />
            )
          })
        }
      </ProjectList>
    </ProjectSection>
    
  )
}
