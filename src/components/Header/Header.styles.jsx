import styled from 'styled-components';
import { Typography, Box } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

export const HeaderContainer = styled('header')`
  width:100%;
  height: 56px;
  background: ${({ theme }) => theme.palette.primary.main};
  display:flex;
  align-items:center;
  align-content:center;
  padding: 0 54px 0 64px;
`;

export const Container = styled(Box)`
  display:flex;
  justify-content:center;
  align-items:center;
  align-content:center;
  width:100%;
  max-width:1440px;
  margin: 0 auto;
`

export const Logo = styled('img')`
  width:77px;
  height: 17px;
  position: absolute;
  left: 64px;
`;

export const Text = styled(Typography)`
  font-size:16px;
  letter-spacing: 0.2px;
  color: #ffffff;
  font-weight: ${({dropdown}) => dropdown ? 'bold' : 400};
`;

export const ArrowDropDownIcon = styled(ArrowDropDown)`
  opacity: .9;
  color: #fff;
  height:16px;
  width: 14px;
`;

export const DropdownWrapper = styled(Box)`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  width: 192px;
  height:100%;
`;

export const DropdownMenuContent = styled(Box)`
  background: ${({ theme }) => theme.palette.primary.main};
  width:192px;
  height:94px;
  padding: 16px 20px;
  display:flex;
  align-items:flex-end;
  justify-content:flex-end;
`

