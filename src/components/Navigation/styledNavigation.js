import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  @media( max-width: 625px ) {
    background: #4F4DB8;
    width: 100%;
    padding: 16px;
    position: absolute;
    transition: left .5s ease;
    top: 80px;
    left: ${(props) => (props.headerMenuOpen ? '0' : '-100%')};
    z-index: 2;

    @media( max-width: 625px ) {
      top: 64px;
    }
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
`;

export const NavLinkWrapper = styled(NavLink)`
  display: flex;
  grid-gap: 8px;
  align-items: center;
  height: 100%;
  transition: opacity .3s;
  opacity: .5;

  @media( max-width: 625px) {
    width: min-content;
  }

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
  @media( max-width: 625px) {
    font-size: 18px;
    text-align: left;
  }
`;