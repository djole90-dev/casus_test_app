import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const StyledContainer = styled(Box)`
  max-width:1440px;
  width:100%;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  position:fixed;
  top:0;
  left: 0;
  right:0;
  bottom:0;
  background-color: ${({theme}) => theme.palette.primary.bgApp}
`

export const Logo = styled('img')`
  position: absolute;
  top:31px;
  left:35px;
  width:77px;
  height: 17px;
`