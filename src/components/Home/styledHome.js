import { Image } from "antd";
import styled from "styled-components/macro";

export const HomeWrapper = styled.section`
  width: max-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HomeContent = styled.div`
  display: flex;
  grid-gap: 64px;
  margin-bottom: 80px;

  @media(max-width: 1023px) {
    grid-gap: 40px;
  }
  @media(max-width: 625px) {
    grid-gap: 24px;
    margin-bottom: 64px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  justify-content: center;
`;

export const Title = styled.h1`
   font-size: 64px;
   color: inherit;
`;

export const Text = styled.p`
  font-size: 24px;
`;

export const AuthorImg = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 1000px;
  z-index: 1;

  @media(max-width: 1023px) {
    width: 232px;
    height: 232px;
  }
  @media(max-width: 625px) {
    width: 272px;
    height: 272px;
  }
`;