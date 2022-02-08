import styled from "styled-components/macro";

export const ProjectWrapper = styled.li`
  display: flex;
  border-radius: 20px;
  z-index: 1;
  background: #4F4DB8;
  height: 360px;
  width: 672px;
  box-shadow: 0 0 8px #ACABEE inset;

  @media( max-width: 1439px) {
    width: 300px;
    height: 748px;
    flex-direction: column;
  }
  @media( max-width: 768px) {
    width: 288px;
    height: 798px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 360px;
  border-radius: 20px;

  @media( max-width: 1439px ) {
    width: 100%;
  }
  @media( max-width: 768px) {
    align-self: center;
    height: 345.6px;
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

  @media( max-width: 1439px ) {
    height: 388px;
  }
  @media( max-width: 768px ) {
    height: 452.4px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
`;

export const Title = styled.h3`
  text-align: center;
  color: inherit;
  font-weight: 500;
  font-size: 26px;
`;

export const Summary = styled.p`
  padding: 0;
  font-size: 16px;
`;

export const FeatureWrapper = styled.ul`
  list-style-type: circle;
  padding-left: 24px;
  font-size: 16px;
`;

export const Feature = styled.li`

`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 16px;
  align-self: center;

  @media( max-width: 1439px) {
    flex-direction: column;
    width: 100%;
    grid-gap: 8px;
  }
`;

export const Button = styled.button`
  border: 1px solid #FFF;
  background: inherit;
  border-radius: 20px;
  padding: 5px 10px;
  width: 124px;
  transition: transform .3s ease, background .3s ease;
  height: 40px;
  font-size: 16px;

  @media( max-width: 1439px) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background: #2D2C6A;
  }
`;