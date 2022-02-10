import React from 'react';
import { ContactList, ContactWrapper, ListItem, AngelIcon, LinkedIcon, GithubIcon, TwitterIcon, CopyIcon, CopySymbol } from './styledContact';

export default function Contact() {

  const email = 'rileydanejohnston@gmail.com';
  const phone = '803-487-9451';
  const copyPhone = '8034879451';
  //onClick={() => navigator.clipboard.writeText(phone)}

  return (
    <ContactWrapper>
      <ContactList>
        <ListItem>
          {email}
          <CopySymbol
            onClick={() => navigator.clipboard.writeText(email)}
          >
            &#10697;
          </CopySymbol>
        </ListItem>
        <ListItem>
          {phone}
          <CopySymbol
            onClick={() => navigator.clipboard.writeText(copyPhone)}
          >
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
    </ContactWrapper>
  )
}
