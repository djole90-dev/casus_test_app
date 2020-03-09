import styled, { css } from 'styled-components'
import { Button, Box } from '@material-ui/core'

const btnWhiteStyles = css`
  font-weight: bold;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  padding: 12px 15px 11px 16px;
  text-transform:uppercase;
  font-size:11px;
  width:92px;
  height:40px;
  margin-right:16px;
`

const btnHeaderStyles = css`
  padding: 0;
  text-transform:capitalize;
  font-weight:400;
`

const getBtnStyles = props => {
  if (props.btnwhite === 'true') {
    return btnWhiteStyles
  } else {
    return btnHeaderStyles
  }
}

export const StyledButton = styled(Button)`
  font-size:16px;
  letter-spacing: .2px;
  color: ${({btnwhite, theme}) => btnwhite === 'true' ? theme.palette.primary.main : ' #fff'};
  margin-left: auto;
  ${getBtnStyles}
`

export const ButtonWrapper = styled(Box)`
  width:100%;
`


