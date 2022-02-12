import React from 'react'
import { Close, Content, PopupWrapper } from './styledPopup'

export default function Popup({ techOpen, closePopups }) {
  return (
    <PopupWrapper techOpen={techOpen}>
      <Content>
        <Close onClick={closePopups} />
      </Content>
    </PopupWrapper>
  )
}
