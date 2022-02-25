import styled from "styled-components/macro";
import whiteMenu from '../../images/menu-white.svg';
import whiteClose from '../../images/close-white.svg';
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  height: 80px;
  padding: 16px 32px;
  background: #2D2C6A;

  @media ( max-width: 625px ) {
    height: 64px;
    padding: 16px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavWrapper = styled.div`
  z-index: 2;
`;

export const MenuIcon = styled.button`
  display: none;
  background: center / contain no-repeat url(${whiteMenu});
  height: 24px;
  width: 24px;
  border: none;
  transition: transform .3s ease;

  @media( max-width: 625px ) {
    display: block;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const CloseIcon = styled(MenuIcon)`
  background: center / contain no-repeat url(${whiteClose});
`;

export const Name = styled(Link)`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: inherit;
  z-index: 2;

  @media( max-width: 625px ) {
    font-size: 16px;
  }
`;
