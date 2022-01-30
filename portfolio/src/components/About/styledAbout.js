import styled from "styled-components/macro";
import { Image } from 'antd';

export const AboutWrapper = styled.section`
  display: flex;
  height: 100%;
  align-items: center;
  grid-gap: 32px;
  max-width: 1280px;
  padding: 0 50px;

  @media( max-width: 1279px) {
    flex-direction: column;
  }
`;

export const AuthorImage = styled(Image)`
  width: 400px;
  height: 480px;
  display: block;
  border-radius: 20px;
`;

export const TextWrapper = styled.div`
  font-size: 36px;
  align-self: flex-start;

  @media( max-width: 1279px) {
    order: -1;
  }
`;