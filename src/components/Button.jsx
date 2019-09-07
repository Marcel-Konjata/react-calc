import React from "react";
import styled, { keyframes } from "styled-components";
import { operators } from "../utils/calcVals";

const Button = ({ children, ...restProps }) => {
  return <SexyBTN {...restProps}  >{children}</SexyBTN>;
};

export default Button;




// nope i will not use animation libraries for this or over complicate stuff with dynamic classes

const Flash = keyframes`
0%{
    background-color: rgba(158, 101, 35, 0.719);
}

50%{
    background-color: rgba(109, 102, 102, 0.849);
}

100%{
    background-color: rgba(158, 101, 35, 0.719);
}
`;

const SexyBTN = styled.button`
  flex-basis: 30%;
  /* background: rgba(158, 101, 35, 0.719) ; */

    background: ${props=> operators.includes(props.value)  ?  "#61dafb" : "rgba(158, 101, 35, 0.719)"};
  color: whitesmoke;
  border: 1px solid black;
  margin: 1px;
  padding: 20px;
  font-size: 20px;
  &:focus {
    animation: ${Flash} 0.2s ease-in-out;
    outline: none;
  }
  &.active{ animation: ${Flash} 0.2s ease-in-out;
    outline: none;}
`;
