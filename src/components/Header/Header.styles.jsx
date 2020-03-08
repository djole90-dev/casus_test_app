import styled from 'styled-components'
import { } from '@material-ui/core'

export const HeaderContainer = styled('header')`
  width:100%;
  height: 56px;
  background: ${({theme}) => theme.palette.primary.main};
  display:flex;
  justify-content:center;
  align-items:center;
`