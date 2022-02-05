import styled from "styled-components/macro";
import whiteMenu from '../../images/menu-white.svg';
import whiteClose from '../../images/close-white.svg';

export const HeaderWrapper = styled.header`
  height: 80px;
  padding: 16px 32px;
  background: #2D2C6A;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavWrapper = styled.div`
`;

export const MenuIcon = styled.button`
  display: none;
  background: center / contain no-repeat url(${whiteMenu});
  height: 24px;
  width: 24px;
  border: none;

  @media( max-width: 625px ) {
    display: block;
  }
`;

export const CloseIcon = styled(MenuIcon)`
  background: center / contain no-repeat url(${whiteClose});
`;

export const Name = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;

  @media( max-width: 625px ) {
    font-size: 16px;
  }
`;
