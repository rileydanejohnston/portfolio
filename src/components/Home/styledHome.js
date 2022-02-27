import styled from "styled-components/macro";

export const HomeWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HomeContent = styled.div`
  display: flex;
  grid-gap: 64px;
  margin: 0 auto;

  @media(max-width: 1200px) {
    grid-gap: 48px;
  }
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  width: 586.96px;

  @media( max-width: 1200px) {
    width: 338.36px;
  }
  @media(max-width: 768px) {
    align-items: center;
    grid-gap: 8px;
  }
  @media( max-width: 480px) {
    width: auto;
  }
`;

export const Title = styled.h1`
   font-size: 80px;
   color: inherit;
   margin-bottom: 16px;

  @media(max-width: 1200px) {
    font-size: 46px;
  }
  @media(max-width: 768px) {
    text-align: center;
  }
  @media(max-width: 480px) {
    font-size: 30px;
  }
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media(max-width: 480px) {
    flex-direction: column;
    align-items: center;
    grid-gap: 8px;
    margin-bottom: 32px;
  }
`;

export const Text = styled.p`
  font-size: 24px;

  @media(max-width: 1200px) {
    font-size: 16px;
  }
`;

export const Summary = styled(Text)`
  font-size: 18px;

  @media(max-width: 1200px) {
    font-size: 14px;
  }
  @media(max-width: 480px) {
    text-align: center;
  }
`;

export const PopupText = styled(Text)`
  width: max-content;
  z-index: 1;
  color: #1890ff;

  &:hover {
    cursor: pointer;
    
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