import styled from "styled-components/macro";
import linkedImg from '../../images/linkedin.svg';
import githubImg from '../../images/github.svg';
import copyImg from '../../images/copy.svg';
import twitterImg from '../../images/twitter.svg';
import angelImg from '../../images/AngelList.png';
import climateImg from '../../images/climate.ico';

export const ContactWrapper = styled.section`
  height: 100%;
`;

export const ContactList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px 20px;
`;

export const ListItem = styled.li`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 138px;
`;

export const LinkedIcon = styled.a`
  width: 24px;
  height: 24px;
  background: center / cover no-repeat url(${linkedImg});
`;

export const CopyIcon = styled(LinkedIcon)`
  background: center / cover no-repeat url(${copyImg});
`;

export const GithubIcon = styled(LinkedIcon)`
  background: center / cover no-repeat url(${githubImg});
`;

export const TwitterIcon = styled(LinkedIcon)`
  background: center / cover no-repeat url(${twitterImg});
`;

export const AngelIcon = styled(LinkedIcon)`
  width: 17px;
  background: center / cover no-repeat url(${angelImg});
`;

export const ClimateIcon = styled(LinkedIcon)`
  background: center / cover no-repeat url(${climateImg});
`;

