import React from 'react'
import { Close, Content, PopupWrapper } from './styledPopup'

export default function Popup({ techOpen, closePopups, children }) {
  return (
    <PopupWrapper techOpen={techOpen}>
      <Content>
        <Close onClick={closePopups} />
        { children }
      </Content>
    </PopupWrapper>
  )
}
