import React from 'react';
import { ContactList, ContactWrapper, ListItem, AngelIcon, LinkedIcon, GithubIcon, TwitterIcon, PhoneIcon, EmailIcon } from './styledContact';

export default function Contact() {

  const email = 'rileydanejohnston@gmail.com';
  const phone = '8034879451';

  return (
    <ContactWrapper>
      <ContactList>
        <ListItem>
          <EmailIcon 
            onClick={() => navigator.clipboard.writeText(email)}
          />Email
        </ListItem>
        <ListItem>
          <PhoneIcon
            onClick={() => navigator.clipboard.writeText(phone)}
          />Phone
        </ListItem>
        <ListItem>
          <LinkedIcon 
            href='https://www.linkedin.com/in/rileyjohnston/' target='_blank' 
          />LinkedIn
        </ListItem>
        <ListItem>
          <GithubIcon
          href='https://github.com/rileydanejohnston'
          target='_blank'
        />GitHub
        </ListItem>
        <ListItem>
          <TwitterIcon
          href='https://twitter.com/RileyDJohnston'
          target='_blank'
          />Twitter
        </ListItem>
        <ListItem>
          <AngelIcon
            href='https://angel.co/u/riley-johnston'
            target='_blank'
          />AngelList
        </ListItem>
      </ContactList>
    </ContactWrapper>
  )
}
