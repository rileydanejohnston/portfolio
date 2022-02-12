import styled from "styled-components/macro";
import closeImg from '../../images/close-white.svg';

export const PopupWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.techOpen ? 1 : 0)};
  transition: opacity .4s ease-in;
`;

export const Content = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background: #4F4DB8;
  box-shadow: 0 0 8px #ACABEE inset;
  padding: 32px;
  position: relative;
`;

export const Close = styled.button`
  width: 40px;
  height: 40px;
  background: center / cover no-repeat url(${closeImg});
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  transition: transform .3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;