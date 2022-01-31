import styled from "styled-components/macro";
import { Image } from 'antd';

export const AboutWrapper = styled.section`
  display: flex;
  grid-gap: 32px;

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

  @media( max-width: 1279px) {
    order: -1;
  }
`;