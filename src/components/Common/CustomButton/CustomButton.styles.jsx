import styled, {css} from 'styled-components';
import { Button } from '@material-ui/core';

const btnWhiteStyles = css`
  font-weight: bold;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  padding: 0 15px;
  text-transform:uppercase;
  font-size:11px;
  width:92px;
  height:40px;
  color: ${({theme}) => theme.palette.primary.main};
  margin-left: auto;
  margin-right: 16px;
`
const searchBtnStyles = css`
  width:40px;
  height:40px;
  display:flex;
  justify-content:center;
  align-items:center;
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
`

const getBtnStyles = props => {
  if (props.btnwhite) {
    return btnWhiteStyles
  } else if (props.actionbtn) {
    return actionButtonStyles
  } else if (props.searchbtn) {
    return searchBtnStyles
  } else {
    return btnHeaderStyles
  }
}

export const ButtonEl = styled(Button)`
  height: 48px;
  width: 100%;
  color:#fff;
  font-size: 16px;
  letter-spacing: 0.2px;
  ${getBtnStyles};
`;
