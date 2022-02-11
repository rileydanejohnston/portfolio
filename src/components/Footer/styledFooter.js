import styled from "styled-components/macro";
import { LinkedIcon } from "../Contact/styledContact";
import githubImg from '../../images/github-icon.svg';
import twitterImg from '../../images/twitter-icon.png';
import angelImg from '../../images/AngelList-icon.png';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  @media( max-width: 480px) {
    padding: 16px;
  }
`;

export const CiteText = styled.p`
  font-size: 18px;

  @media( max-width: 480px) {
    font-size: 16px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  grid-gap: 24px;

  @media( max-width: 480px) {
    flex-wrap: wrap;
    width: 68px;
  }
`;

export const Linked = styled(LinkedIcon)`
  width: 20px;
  height: 20px;
`;

export const Github = styled(Linked)`
  background: center / cover no-repeat url(${githubImg});
`;

export const Twitter = styled(Linked)`
  background: center / cover no-repeat url(${twitterImg});
`;

export const Angel = styled(Linked)`
  width: 13.75px;
  background: center / cover no-repeat url(${angelImg});
`;

