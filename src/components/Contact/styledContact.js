import styled from "styled-components/macro";
import linkedImg from '../../images/linkedin-icon.png';
import githubImg from '../../images/github-icon.svg';
import copyImg from '../../images/copy-icon.svg';
import twitterImg from '../../images/twitter-icon.png';
import angelImg from '../../images/AngelList-icon.png';
import phoneImg from '../../images/phone-icon.png';
import emailImg from '../../images/email-icon.png';

export const ContactWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 32px;
`;

export const ContactList = styled.ul`
  display: flex;
  border-radius: 20px;
  background: #4F4DB8;
  box-shadow: 0 0 8px #ACABEE inset;
  padding: 0 32px;
  position: relative;
  z-index: 1;
  height: 200px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ListItem = styled.li`
  font-size: 20px;
  display: flex;
  grid-gap: 16px;
  align-items: center;
`;

export const CopySymbol = styled.p`
  font-size: 30px;

  &:hover {
    cursor: pointer;
  }
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
