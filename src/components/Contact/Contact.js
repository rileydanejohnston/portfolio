import React, { useState, useEffect } from 'react';
import {
  ContactList,
  ContactWrapper,
  ListItem,
  AngelIcon,
  LinkedIcon,
  GithubIcon,
  TwitterIcon,
  CopySymbol,
  Title,
  ContactContent,
  ToolTip
} from './styledContact';

export default function Contact() {

  const [emailOpen, setEmailOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [toolTip, setToolTip] = useState('Copy');

  const email = 'rileydanejohnston@gmail.com';
  const phone = '803-487-9451';
  const copyPhone = '8034879451';

  useEffect(() => {
    if (toolTip === 'Copied!' && (emailOpen || phoneOpen)) {
      setToolTip('Copy');
    }
  }, [emailOpen, phoneOpen]);

  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
    setToolTip('Copied!');
  }
  return (
    <ContactWrapper>
      <ContactContent>
        <Title>Let's talk</Title>
        <ContactList>
          <ListItem>
            {email}
            <CopySymbol
              onClick={() => handleCopyClick(email)}
              onMouseEnter={() => setEmailOpen(true)}
              onMouseLeave={() => setEmailOpen(false)}
            >
              <ToolTip toolTipOpen={emailOpen}>{toolTip}</ToolTip>
              &#10697;
            </CopySymbol>
          </ListItem>
          <ListItem>
            {phone}
            <CopySymbol
              onClick={() => handleCopyClick(copyPhone)}
              onMouseEnter={() => setPhoneOpen(true)}
              onMouseLeave={() => setPhoneOpen(false)}
            >
              <ToolTip toolTipOpen={phoneOpen}>{toolTip}</ToolTip>
              &#10697;
            </CopySymbol>
          </ListItem>
          <ListItem>
            <LinkedIcon 
              href='https://www.linkedin.com/in/rileyjohnston/' target='_blank' 
            />
          </ListItem>
          <ListItem>
            <GithubIcon
            href='https://github.com/rileydanejohnston'
            target='_blank'
            />
          </ListItem>
          <ListItem>
            <TwitterIcon
            href='https://twitter.com/RileyDJohnston'
            target='_blank'
            />
          </ListItem>
          <ListItem>
            <AngelIcon
              href='https://angel.co/u/riley-johnston'
              target='_blank'
            />
          </ListItem>
        </ContactList>
      </ContactContent>
    </ContactWrapper>
  )
}
