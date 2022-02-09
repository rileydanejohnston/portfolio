import styled from "styled-components/macro";

export const AboutWrapper = styled.section`
  display: flex;
  grid-gap: 32px;
  width: max-content;
  margin: 0 auto;

  @media( max-width: 1279px ) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AuthorImage = styled.img`
  width: 464px;
  height: 464px;
  border-radius: 1000px;
  z-index: 1;

  @media( max-width: 1279px) {
    order: -1;
    width: 400px;
    height: 400px;
  }

  @media( max-width: 625px) {
    width: 288px;
    height: 288px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 64px;
  border-radius: 20px;
  background: #4F4DB8;
  box-shadow: 0 0 8px #ACABEE inset;
  padding: 32px;
  z-index: 1;
  width: 720px;

  @media( max-width: 1279px) {
    width: 400px;
  }

  @media( max-width: 625px) {
    width: 288px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
`;

export const Title = styled.h3`
  font-size: 26px;
  color: inherit;
  text-transform: uppercase;
  font-weight: 400;

  @media( max-width: 767px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  font-size: 20px;

  @media( max-width: 767px) {
    font-size: 16px;
  }
`;