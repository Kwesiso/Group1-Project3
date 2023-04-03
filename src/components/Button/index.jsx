import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({ type1, type2, value, width, href }) => (
  <ButtonStyled type1={type1} type2={type2} width={width} href={href}>
    {value}
  </ButtonStyled>
);

export default Button;
