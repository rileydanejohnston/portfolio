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
import uniqueId from 'lodash.uniqueid';
import { email, phone, copyPhone } from '../../constants/contact';

export default function Contact() {

  const [emailOpen, setEmailOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [toolTip, setToolTip] = useState('Copy');

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
          <ListItem key={uniqueId()}>
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
          <ListItem key={uniqueId()}>
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
          <ListItem key={uniqueId()}>
            <LinkedIcon 
              href='https://www.linkedin.com/in/rileyjohnston/' target='_blank' 
            />
          </ListItem>
          <ListItem key={uniqueId()}>
            <GithubIcon
            href='https://github.com/rileydanejohnston'
            target='_blank'
            />
          </ListItem>
          <ListItem key={uniqueId()}>
            <TwitterIcon
            href='https://twitter.com/RileyDJohnston'
            target='_blank'
            />
          </ListItem>
          <ListItem key={uniqueId()}>
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
