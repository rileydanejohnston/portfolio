import React, { useEffect } from 'react'
import { Close, Content, PopupWrapper } from './styledPopup'

export default function Popup({ techOpen, closePopups, children }) {

  useEffect(() => {
    const closeEsc = (e) => {
      if (e.key === 'Escape') {
        closePopups();
      }
    }
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
  }, []);

  useEffect(() => {
    const closeClick = (e) => {
      if (e.target.classList.contains('popup')) {
        closePopups();
      }
    }
    document.addEventListener('click', closeClick);
    return () => document.removeEventListener('click', closeClick);
  }, []);
  

  return (
    <PopupWrapper
      techOpen={techOpen}
      className='popup'
    >
      <Content>
        <Close onClick={closePopups} />
        { children }
      </Content>
    </PopupWrapper>
  )
}
