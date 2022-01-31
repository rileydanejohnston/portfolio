import React from 'react';
import Project from '../Project/Project';
import { ProjectList, ProjectSection } from './styledProjects';

export default function Projects() {

  return (
    <ProjectSection>
      <ProjectList>
        <Project />
      </ProjectList>
    </ProjectSection>
    
  )
}
