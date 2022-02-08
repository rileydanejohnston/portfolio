import styled from "styled-components/macro";

export const ProjectSection = styled.section`
  padding: 48px 0;

  @media( max-width: 625px ) {
    padding: 24px 0;
  }
`;

export const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 32px;
  width: max-content;
  margin: 0 auto;
  width: 1376px;

  @media( max-width: 1439px ){
    width: 948px;
    grid-gap: 24px;
  }

  @media( max-width: 1023px ){
    width: 624px;
  }

  @media( max-width: 768px ){
    width: 288px;
    grid-gap: 48px;
  }
`;

