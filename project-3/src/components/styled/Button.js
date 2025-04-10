import styled from "styled-components";

export const Button = styled.button`
  color  : white ;
  background: black;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;
  float: right;

  &:hover{
    background-color: transparent;
    color: black;
    transition: 0.3s background ease-in;
    border: 1px solid black;
  }
`;
export const OutlineButton = styled(Button)`
border: 1px solid black;
background-color:white ;
color: black;
  &:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;