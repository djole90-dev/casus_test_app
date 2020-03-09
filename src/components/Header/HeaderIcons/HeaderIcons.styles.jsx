import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import { Notifications, ModeComment } from '@material-ui/icons';

export const IconsContainer = styled(Box)`
  display:flex;
`;
const iconStyles = css`
  height: 22px;
  width: auto;
  color: ${({ theme }) => theme.palette.primary.borders};
`;
export const NotificationIcon = styled(Notifications)`
  ${iconStyles};
`;

export const MessagesIcon = styled(ModeComment)`
  ${iconStyles};
`;

export const Separator = styled(Box)`
  display:block;
  width:1px;
  height: 25px;
  margin: 0 16px;
  background-color: #60636f;
`;
