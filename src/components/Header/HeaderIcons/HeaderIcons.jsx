import React from 'react';
import { Badge } from '@material-ui/core';
import {
  IconsContainer,
  NotificationIcon,
  Separator,
  MessagesIcon
} from './HeaderIcons.styles';

const HeaderIcons = () => (
  <IconsContainer>
    <Badge color="secondary" variant="dot" invisible={false} overlap="circle">
      <NotificationIcon />
    </Badge>
    <Separator />
    <Badge color="secondary" variant="dot" invisible={false} overlap="circle">
      <MessagesIcon />
    </Badge>
  </IconsContainer>
);

export default HeaderIcons;
