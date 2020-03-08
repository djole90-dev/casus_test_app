import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const StyledContainer = styled(Box)`
  max-width:1440px;
  width:100%;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  height:100%;
  position:relative;
`

export const Logo = styled('img')`
  position: absolute;
  top:31px;
  left:35px;
  width:77px;
  height: 17px;
`