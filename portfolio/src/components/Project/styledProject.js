import styled from "styled-components/macro";

export const ProjectWrapper = styled.li`
  display: flex;
  grid-gap: 48px;
  border: 1px solid black;
  border-radius: 20px;

  @media( max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 360px;
  transition: transform .2s ease;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const TextWrapper = styled.div`
`;

export const Title = styled.h3`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Summary = styled.p`
  margin: 0;
  padding: 0;
`;

export const FeatureWrapper = styled.ul`
`;

export const Feature = styled.li`

`;

export const FeatureSpan = styled.span`
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 16px;
  align-self: center;
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px 10px;
  width: 124px;
  transition: transform .2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;