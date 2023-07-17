import styled from "styled-components";

export const Container = styled.div`
  margin-top: 44px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
`;

export const Textarea = styled.textarea`
  background-color: rgba(245, 245, 245, 1);
  border: none;
  border-radius: 7px;
  padding: 9px 16px;
  margin-top: 24px;
  min-height: 154px;
  width: 100%;
  ${({ hasError }) =>
    hasError &&
    `
    border: solid 1px red;
      &::placeholder {
    color: red;
  }
    
  `}
  &:active,
  &:focus,
  &:hover {
    outline: solid 2px rgb(241, 196, 15);
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    padding: 16px 23px;
    min-height: 224px;
  }
`;
