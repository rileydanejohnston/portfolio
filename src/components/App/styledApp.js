import styled from 'styled-components';

export const AppWrapper = styled.div`
  height: ${(props) => (props.path === '/' || props.path === '/contact' ? 'calc(100vh - 64px)' : '100%')};
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  position: relative;

  @media( max-width: 480px) {
    height: ${(props) => (props.path === '/' || props.path === '/contact' ? 'calc(100vh - 96px)' : '100%')};
  }
`;