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

  @media(max-width: 1200px) {
    grid-gap: 48px;
  }
  @media(max-width: 768px) {
    flex-direction: column;
    margin-bottom: 64px;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  justify-content: center;

  @media(max-width: 768px) {
    align-items: center;
    grid-gap: 8px;
  }
`;

export const Title = styled.h1`
   font-size: 80px;
   color: inherit;

   @media(max-width: 1200px) {
     font-size: 46px;
  }
  @media(max-width: 480px) {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-size: 24px;

  @media(max-width: 480px) {
    font-size: 18px;
  }
`;

export const AuthorImg = styled.img`
  width: 464px;
  height: 464px;
  border-radius: 1000px;
  z-index: 1;

  @media(max-width: 1200px) {
    width: 232px;
    height: 232px;
  }
  @media(max-width: 768px) {
    width: 272px;
    height: 272px;
    order: -1;
  }
`;