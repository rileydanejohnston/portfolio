import styled from "styled-components/macro";
import linkedImg from '../../images/linkedin-icon.png';
import githubImg from '../../images/github-icon.svg';
import copyImg from '../../images/copy.svg';
import twitterImg from '../../images/twitter-icon.png';
import angelImg from '../../images/AngelList-icon.png';
import phoneImg from '../../images/phone-icon.png';
import emailImg from '../../images/email-icon.png';

export const ContactWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px 48px;
  border-radius: 20px;
  background: #4F4DB8;
  box-shadow: 0 0 8px #ACABEE inset;
  padding: 32px;
  position: relative;
  z-index: 1;
`;

export const ListItem = styled.li`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 138px;
`;

export const LinkedIcon = styled.a`
  width: 32px;
  height: 32px;
  background: center / cover no-repeat url(${linkedImg});
`;

export const EmailIcon = styled(LinkedIcon)`
  background: center / cover no-repeat url(${emailImg});
`;

export const GithubIcon = styled(LinkedIcon)`
  background: center / cover no-repeat url(${githubImg});
`;

export const TwitterIcon = styled(LinkedIcon)`
  background: center / cover no-repeat url(${twitterImg});
`;

export const AngelIcon = styled(LinkedIcon)`
  width: 22px;
  background: center / cover no-repeat url(${angelImg});
`;

export const PhoneIcon = styled(LinkedIcon)`
  background: center / cover no-repeat url(${phoneImg});
`;
