import React from 'react'
import Popup from '../Popup/Popup'
import { Bullet, PopupContent, ListGroup, TechList, Title } from './styledTechPopup'
import { main, other } from '../../constants/technologies'

export default function TechPopup({ closePopups, techOpen }) {
  return (
    <Popup
      closePopups={closePopups}
      techOpen={techOpen}
    >
      <PopupContent>
        <ListGroup>
          <Title>Main</Title>
          <TechList>
            {
              main.map((tech) => {
                return (
                  <Bullet>{tech}</Bullet>
                )
              })
            }
          </TechList>
        </ListGroup>
        <ListGroup>
          <Title>Other</Title>
          <TechList>
          {
              other.map((tech) => {
                return (
                  <Bullet>{tech}</Bullet>
                )
              })
            }
          </TechList>
        </ListGroup>
      </PopupContent>
    </Popup>
  )
}
