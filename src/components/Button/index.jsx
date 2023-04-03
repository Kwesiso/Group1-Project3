import React from 'react'
import styled, { css } from 'styled-components'
import ButtonStyled from './styles'

const Button = ({ type1, type2, value, width }) => {
  return (
    <ButtonStyled type1={type1} type2={type2} width={width}>{value}</ButtonStyled>
  )
}

export default Button