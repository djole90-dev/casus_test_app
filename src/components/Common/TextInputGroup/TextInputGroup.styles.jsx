import styled, {css} from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const iconStyles = css`
  width:10px;
  height:10px;
  position: absolute;
  right: 16px;
  bottom: 18px;
  height: 14px;
  width: 14px;
  color: ${({ theme }) => theme.palette.primary.textLight};
  cursor:pointer;
  opacity: .66;
  transition: all .2s;

  &:hover {
    opacity:1;
  }
`
export const VisibilityIcon = styled(Visibility)`
  ${iconStyles}
`
export const VisibilityOffIcon = styled(VisibilityOff)`
  ${iconStyles}
`

export const InputGroupContainer = styled(Box)`
  display:flex;
  flex-direction: column;
  margin-bottom:24px;
`;

export const Label = styled(Typography)`
  font-size:14px;
  color: ${({ theme }) => theme.palette.primary.textLight};
  margin-bottom:14px;
  letter-spacing: .2px;
  line-height: 1;
`;

export const InputWrapper = styled(Box)`
  position:relative;
`

const setPadding = props => {
 return props.type === 'password' ? '35px' : '16px'
}

export const InputEl = styled('input')`
  background:#fff;
  border: 1px solid ${({ theme }) => theme.palette.primary.borders};
  border-radius:3px;
  padding:17px ${setPadding} 16px 16px;
  color: ${({ theme }) => theme.palette.primary.main};
  width:100%;
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


