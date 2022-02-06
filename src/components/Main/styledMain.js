import styled from "styled-components/macro";

export const MainWrapper = styled.main`
  padding: 0 32px;
  height: calc(100% - 80px);

  @media( max-width: 625px ) {
    height: calc(100% - 64px);
  }
`;