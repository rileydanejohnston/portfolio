import styled from "styled-components/macro";

export const HeaderWrapper = styled.header`
  background: #f0f2f5;
  display: flex;
  justify-content: space-between;
  padding: 10px 32px;
  height: auto;
`;

export const Title = styled.h1`
  font-size: 64px;
  margin: 0;
`;

export const Name = styled.p`
  font-size: 48px;
  margin: 0;
`;

export const Location = styled(Name)`
`;
