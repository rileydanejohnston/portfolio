import styled from "styled-components/macro";

export const ProjectWrapper = styled.li`
  display: flex;
  border-radius: 20px;
  z-index: 1;
  background: #4F4DB8;
  height: 360px;
  width: 660px;
  box-shadow: 0 0 8px #ACABEE inset;

  @media( max-width: 768px) {
    flex-direction: column;
    grid-gap: 16px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 360px;
  border-radius: 20px;

  @media( max-width: 768px) {
    align-self: center;
  }

  &:hover {
    cursor: pointer;
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
  color: inherit;
  font-weight: 500;
  font-size: 26px;
  margin-bottom: 8px;

  @media( max-width: 1023px ) {
    font-size: 22px;
  }
`;

export const Summary = styled.p`
  padding: 0;
`;

export const FeatureWrapper = styled.ul`
  list-style-type: circle;
  padding-left: 40px;
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
  border: 1px solid #FFF;
  background: inherit;
  border-radius: 20px;
  padding: 5px 10px;
  width: 124px;
  transition: transform .3s ease, background .3s ease;
  height: 40px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background: #2D2C6A;
  }
`;