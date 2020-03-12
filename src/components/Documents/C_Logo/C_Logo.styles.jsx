import styled from 'styled-components'
import { Box, Typography } from '@material-ui/core'

export const Wrapper = styled(Box)`
  overflow:hidden;
  width:35px;
  height:35px;
  position: absolute;
  bottom:12px;
  left: 10px;
`
export const CutWrapper = styled(Box)`
  transform: rotate(-45deg);
  position:relative;
  width:35px;
  height:35px;
  overflow: hidden;
  z-index:10;
`
export const Letter = styled(Typography)`
  font-size:25px;
  font-weight:bold;
  color: ${({logocolor}) => logocolor};
  position: absolute;
  left: -3px;
  z-index: 20;
  transform: rotate(+45deg)
`