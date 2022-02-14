import styled from "styled-components/macro";

export const Title = styled.h3`
  font-size: 24px;
  color: inherit;
  width: 100%;
  border-bottom: 1px solid white;
  margin-bottom: 8px;

  @media( max-width: 625px) {
    font-size: 20px;
  }
`;

export const PopupContent = styled.div`
  display: flex;
  grid-gap: 64px;

  @media( max-width: 625px ) {
    flex-direction: column;
    grid-gap: 32px;
  }
`;

export const ListGroup = styled.div`
  width: 200px;
`;

export const TechList = styled.ul`
`;

export const Bullet = styled.li`
  font-size: 18px;

  @media( max-width: 625px) {
    font-size: 14px;
  }
`;