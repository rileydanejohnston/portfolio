import styled from "styled-components/macro";

export const MainWrapper = styled.main`
  padding: 48px 0;
  
  height: calc(100% - 80px);

  @media( max-width: 625px ) {
    height: calc(100% - 64px);
    padding: 24px 16px;
  }
`;