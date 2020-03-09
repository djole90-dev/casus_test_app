import styled, { css } from 'styled-components'
import {Tabs, Tab, Typography, Box, AppBar} from '@material-ui/core'
import {Notifications, ModeComment} from '@material-ui/icons';


export const StyledAppBar = styled(AppBar)`
  height: 56px;
  padding: 0 54px 0 64px;
  display:flex;
  flex-direction:row;
  align-items:center
`

export const StyledTabs = styled(Tabs)`
  
`

export const StyledTab = styled(Tab)`

`
export const Text = styled(Typography)`

`

const iconStyles = css`
  height:22px;
  width: auto;
  color: ${({theme}) => theme.palette.primary.borders};
`
export const NotificationIcon = styled(Notifications)`
  ${iconStyles};
`

export const MessagesIcon = styled(ModeComment)`
  ${iconStyles};
`

export const Separator = styled(Box)`
  display:block;
  width:1px;
  height: 25px;
  margin: 0 16px;
  background-color: #60636f;
`

export const Logo = styled('img')`
  width:77px;
  height: 17px;
  margin-right:128px;
`

export const IconsContainer = styled(Box)`
  display:flex;
`
export const TabsContainer = styled(Box)`
  flex-grow:1;
  display:flex;
  justify-content:center;
`