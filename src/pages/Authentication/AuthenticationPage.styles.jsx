import styled from 'styled-components'
import {Box} from '@material-ui/core'

export const CopySection = styled(Box)`
  width: 41.1%;
  height:100%;
  background: ${({theme}) => theme.palette.primary.main}
`

export const AuthSection = styled(Box)`
  flex-grow:1;
  background: ${({theme}) => theme.palette.primary.bgLight}
`

export const Container = styled(Box)`
  display:flex;
  height:100%;
`

