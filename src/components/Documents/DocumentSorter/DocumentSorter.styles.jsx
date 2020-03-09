import styled, { css } from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export const SortOptContainer = styled(Box)`
  width:100%;
  height:38px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;

  &:hover {
    opacity: .85;
  }
`;

export const DropdownMenuContent = styled(Box)`
  width: 160px;
  height: 110px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  padding: 0 5px 0 11px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`;

const fontStyles = css`
  letter-spacing: 0.25px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.primary.main};
`;
export const Option = styled(Box)`
  display:flex;
  justify-content:center;
  align-items:center;
  align-content:center;
`;
export const Label = styled(Typography)`
  ${fontStyles};
  font-weight: 500;
  margin-right: 12px;
  
`;
export const Text = styled(Typography)`
  ${fontStyles};
  display:flex;
  align-items:center;
`;

export const ArrowRightIcon = styled(ArrowRightAltIcon)`
  margin:0 5px;
`;
