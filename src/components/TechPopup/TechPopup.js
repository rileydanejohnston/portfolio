import React from 'react'
import Popup from '../Popup/Popup'
import { Bullet, PopupContent, ListGroup, TechList, Title } from './styledTechPopup'

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
            <Bullet>React</Bullet>
            <Bullet>JavaScript (ES6)</Bullet>
            <Bullet>Styled-Components</Bullet>
            <Bullet>CSS3</Bullet>
            <Bullet>HTML5</Bullet>
            <Bullet>Node.js</Bullet>
            <Bullet>Express.js</Bullet>
            <Bullet>MongoDB</Bullet>
            <Bullet>Jest</Bullet>
          </TechList>
        </ListGroup>
        <ListGroup>
          <Title>Other</Title>
          <TechList>
            <Bullet>SuperTest</Bullet>
            <Bullet>Mongoose</Bullet>
            <Bullet>Celebrate/Joi</Bullet>
            <Bullet>JSON web tokens</Bullet>
            <Bullet>Bcryptjs</Bullet>
            <Bullet>React SizeMe</Bullet>
            <Bullet>Particle.js</Bullet>
            <Bullet>Git/Github</Bullet>
            <Bullet>Google Cloud</Bullet>
            <Bullet>NGINX</Bullet>
          </TechList>
        </ListGroup>
      </PopupContent>
    </Popup>
  )
}
