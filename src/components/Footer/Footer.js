import React from 'react'
import {
  CiteText,
  FooterWrapper,
  IconWrapper,
  Linked,
  Github,
  Twitter,
  Angel
} from './styledFooter';

export default function Footer() {
  return (
    <FooterWrapper>
      <CiteText>Riley Johnston - 2022</CiteText>
      <IconWrapper>
        <Linked
          href='https://www.linkedin.com/in/rileyjohnston/' target='_blank'
        />
        <Github
            href='https://github.com/rileydanejohnston'
            target='_blank'
        />
        <Twitter
          href='https://twitter.com/RileyDJohnston'
          target='_blank'
          />
        <Angel
          href='https://angel.co/u/riley-johnston'
          target='_blank'
        />
      </IconWrapper>
    </FooterWrapper>
  )
}
