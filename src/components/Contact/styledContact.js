import styled from "styled-components/macro";
import linkedImg from '../../images/linkedin-icon.png';
import githubImg from '../../images/github-icon.svg';
import twitterImg from '../../images/twitter-icon.png';
import angelImg from '../../images/AngelList-icon.png';
import phoneImg from '../../images/phone-icon.png';
import emailImg from '../../images/email-icon.png';

export const ContactWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 0 32px;

  @media( max-width: 767px) {
    padding: 0 16px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 48px;
  border-radius: 20px;
  background: #4F4DB8;
  box-shadow: 0 0 8px #ACABEE inset;
  padding: 32px;
  position: relative;
  z-index: 1;
  width: 100%;

  @media( max-width: 1023px) {
    width: 712px;
  }
  @media( max-width: 767px) {
    width: auto;
  }
  @media( max-width: 480px) {
    padding: 32px 16px;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 48px;

  @media( max-width: 1023px) {
    flex-wrap: wrap;
  }
  @media( max-width: 767px) {
    flex-direction: column;
    grid-gap: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: inherit;
  text-align: center;
  font-weight: 400;

  @media( max-width: 480px) {
    font-size: 24px;
  }
`;

export const ListItem = styled.li`
  font-size: 20px;
  display: flex;
  grid-gap: 16px;
  align-items: center;

  @media( max-width: 480px) {
    font-size: 14px;
    grid-gap: 8px;
  }
`;

export const CopySymbol = styled.p`
  font-size: 30px;
  position: relative;

  @media( max-width: 480px) {
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ToolTip = styled.span`
  width: max-content;
  font-size: 12px;
  opacity: ${(props) => (props.toolTipOpen ? 1 : 0)};
  transition: opacity .8s ease;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);

  @media( max-width: 480px) {
    font-size: 10px;
  }
`;

export const LinkedIcon = styled.a`
  width: 32px;
  height: 32px;
  background: center / cover no-repeat url(${linkedImg});

  @media( max-width: 480px) {
    width: 24px;
    height: 24px;
  }
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

  @media( max-width: 480px) {
    width: 16.5px;
  }
`;

export const PhoneIcon = styled(LinkedIcon)`
  background: center / cover no-repeat url(${phoneImg});
`;
