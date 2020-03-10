import styled from 'styled-components'
import { Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'

export const Heading = styled(Typography)`
  font-size:26px;
  font-weight:500;
  line-height: 1.23;
  letter-spacing: 0.2px;
  color: ${({theme}) => theme.palette.primary.main};
  margin-bottom:49px;
  letter-spacing: .2px;
`
export const Form = styled('form')`
  margin-top:29px;
  width:100%;
`
export const CheckboxContainer = styled(Box)`

`
export const PasswordContainer = styled(Box)`
  position:relative;
  width:100%;
`
export const AcceptUrl = styled(Link)`
  text-decoration: underline;
  margin-left:3px;
  color: inherit;
  font-family: inherit;
  transition: all .2s;

  &:hover {
    color: rgb(45, 45, 45);
  }
`

export const RCP = styled('img')`
  width:100%;
  height: 85px;
  margin-bottom: 35px;
  margin-top:24px;
`
