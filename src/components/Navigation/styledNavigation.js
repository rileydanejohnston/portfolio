import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  @media( max-width: 625px ) {
    visibility: hidden;
    opacity: 0;
    display: none;
    background: #2D2C6A;
    width: 200px;
    padding: 16px;
  }
`; 

export const NavList = styled.ul`
  display: flex;
  grid-gap: 32px;

  @media( max-width: 1023px) {
    grid-gap: 24px;
  }

  @media( max-width: 625px) {
    flex-direction: column;
  }
`;

export const NavGroup = styled.li`
  z-index: 9999;
`;

export const NavLinkWrapper = styled(NavLink)`
  display: flex;
  grid-gap: 8px;
  align-items: center;
  height: 100%;
  transition: opacity .3s;
  opacity: .5;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const NavText = styled.p`
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  @media( max-width: 1023px) {
    font-size: 16px;
  }
  @media( max-width: 624px) {
    font-size: 18px;
    text-align: left;
  }
`;