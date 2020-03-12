import styled, {css} from 'styled-components';
import { Button, Box } from '@material-ui/core';

const btnWhiteStyles = css`
  font-weight: bold;
  background: #ffffff;
  display:flex;
  justify-content:center;
  align-items:center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  text-transform:uppercase;
  font-size:11px;
  height:40px;
  width: ${({width}) => width && width};
  color: ${({theme}) => theme.palette.primary.main};
  margin-left:16px;
`

const btnHeaderStyles = css`
  padding: 0;
  text-transform:capitalize;
  font-weight:400;
`

const actionButtonStyles = css`
  height: 48px;
  width: 100%;
  background: ${({theme}) => theme.palette.primary.blue};
  border-radius:3px;
  font-weight:500;
  &:hover {
    background-color: #1c69f8;
  }
`

const getBtnStyles = props => {
  const { btntype } = props
  if (btntype === 'btn-white') {
    return btnWhiteStyles
  } else if (btntype === 'action') {
    return actionButtonStyles
  } else if (btntype === 'header-dropdown') {
    return btnHeaderStyles
  }
}

export const ButtonEl = styled(Button)`
  color:#fff;
  font-size: 16px;
  letter-spacing: 0.2px;
  position:relative;
  ${getBtnStyles};
`;

export const SpinnerContainer = styled(Box)`
  position: absolute;
  right: 15px;
`
