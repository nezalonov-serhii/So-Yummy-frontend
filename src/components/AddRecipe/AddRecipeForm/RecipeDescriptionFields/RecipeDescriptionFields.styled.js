import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 44px;
  padding-bottom: 23px;
`;
export const Input = styled.input`
  border: none;
  width: 100%;
  padding-bottom: 18px;
  color: rgba(0, 0, 0, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  background-color: transparent;
  /* &:invalid {
    border: solid 1px red;
  } */
  ${({ hasError }) =>
    hasError &&
    `
    border: solid 1px red;
  `}
  &:active,
  &:focus,
  &:hover {
    outline: none;
  }
`;
export const ErrorMessage = styled.span`
  background-color: green;
  position: absolute;
  bottom: -20px;
  left: 0;
  color: red;
  font-size: 12px;
`;
export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px rgba(224, 224, 224, 1);
  &:active,
  &:focus,
  &:hover {
    outline: solid 2px rgb(241, 196, 15);
  }
`;
