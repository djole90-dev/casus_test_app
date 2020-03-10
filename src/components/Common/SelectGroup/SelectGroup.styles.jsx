import styled from 'styled-components';
import { InputBase, Typography } from '@material-ui/core';

export const Label = styled(Typography)`
  font-size:14px;
  color: ${({ theme }) => theme.palette.primary.textLight};
  margin-bottom:14px;
  letter-spacing: .2px;
  line-height: 1;
`;

export const Placeholder = styled(Typography)`
  font-size:15px;
  color: ${({ theme }) => theme.palette.primary.textLight};
  letter-spacing: .2px;
  opacity: .85;
`;

export const Text = styled(Typography)`
  font-size:15px;
  color: ${({ theme }) => theme.palette.primary.main};
  letter-spacing: .2px;
`

export const StyledInputBase = styled(InputBase)`
 background:#fff;
  border: 1px solid ${({ theme }) => theme.palette.primary.borders};
  border-radius:3px;
  padding:11px 16px 9px 16px;
  color: ${({ theme }) => theme.palette.primary.main};
  width:100%;
  margin-bottom: 35px;

  &::before {
    display:none;
  }
  &::after {
    display:none;
  }
  &:focus {
    border:1px solid ${({ theme }) => theme.palette.primary.textLight};
    outline: none;
  }
  &::placeholder {
    opacity: .66;
    letter-spacing: .2px;
  }
`;
