import styled, { css } from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import { ArrowDropDown, ArrowRight } from '@material-ui/icons';

export const Container = styled(Box)`
  display:flex;
  flex-direction:column;
`;

export const Heading = styled(Typography)`
  font-size: 16px;
  letter-spacing: 0.23px;
  line-height:1.31;
  color: ${({ active, theme }) =>
    active ? theme.palette.primary.main : '#747782'};
  display:flex;
  align-items: center;
  font-weight:bold;
  cursor: pointer;
  border-bottom: 3px solid ${({ theme, active }) => active ? theme.palette.primary.main : 'transparent'};
  margin-bottom:17px;
`;
const iconStyles = css`
  opacity: .9;
  font-size: 20px;
`;
export const ArrowDropDownIcon = styled(ArrowDropDown)`
  ${iconStyles}
`;
export const ArrowRightIcon = styled(ArrowRight)`
  ${iconStyles}
`;

export const Text = styled(Typography)`
  font-size:16px;
  line-height: 1.31;
  letter-spacing: 0.23px;
  color: ${({ active, theme }) =>
    active ? theme.palette.primary.main : '#747782'};
  font-weight: ${({ active }) => active && 'bold'};
  border-bottom: ${({ active, theme }) =>
    active ? `3px solid ${theme.palette.primary.main}` : 'transparent'};;
  width: max-content;
  text-transform: capitalize;
`;

export const MenuItem = styled('div')`
  margin-bottom:22px;
  cursor:pointer;
  transtion:all .2s;
  
  &:hover {
    opacity: .8;
  }
`;
export const ListContainer = styled(Box)`
  padding-left:25px;
  display:flex;
  flex-direction:column;
`;
