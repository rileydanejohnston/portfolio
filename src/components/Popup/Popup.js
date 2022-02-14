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

  return (
    <PopupWrapper techOpen={techOpen}>
      <Content>
        <Close onClick={closePopups} />
        { children }
      </Content>
    </PopupWrapper>
  )
}
