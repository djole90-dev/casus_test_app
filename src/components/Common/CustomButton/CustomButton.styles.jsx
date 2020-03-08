import styled from 'styled-components';
import { ButtonBase } from '@material-ui/core';

export const Button = styled(ButtonBase)`
  height: 48px;
  width: 100%;
  font-family: 'Heebo';
  font-weight:500;
  display:flex;
  justify-content:center;
  aligh-items:center;
  font-size: 16px;
  color:#fff;
  background: ${({theme}) => theme.palette.primary.blue};
  border-radius:3px;
  letter-spacing: 0.2px;
`;
