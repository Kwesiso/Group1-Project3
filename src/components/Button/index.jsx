import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({ type1, type2, value, width, href, heroButton }) => (
  <ButtonStyled
    type1={type1}
    type2={type2}
    width={width}
    href={href}
    heroButton={heroButton}
  >
    {value}
  </ButtonStyled>
);

export default Button;
