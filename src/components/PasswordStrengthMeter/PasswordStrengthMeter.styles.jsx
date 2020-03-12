import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import LinearProgressComponent from '@material-ui/core/LinearProgress';
import CheckIconComponent from '@material-ui/icons/Check';

export const Container = styled(Box)`
  padding: 21px 14px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.palette.primary.textLight};
  border-top:none;
  position: absolute;
  top:100%;
  width:100%;
  z-index:10;
`;
export const Content = styled(Box)`
  width:276px;
  margin: 0 auto;
`;

const getColorByPasswordStrength = props => {
  if (props.error) {
    return 'red'
  }

  if (props.strength > 25) {
    return 'green'
  } 
}

export const LinearProgress = styled(LinearProgressComponent)`
  height: 9px;
  border: 1px solid ${({ theme }) => theme.palette.primary.borders};
  opacity: .66;
  width:95%;
`;

export const CheckContainer = styled(Box)`
  display: flex;
  align-items:center;
`
export const CheckIcon = styled(CheckIconComponent)`
  margin-right: 9px;
  color: ${({ theme }) => theme.palette.primary.borders};
  color: ${getColorByPasswordStrength}
`
export const Text = styled(Typography)`
  font-size:14px;
  letter-spacing: 0.2px;
  color: ${getColorByPasswordStrength}
`
export const Status = styled(Typography)`
  font-weight: 500;
  font-size:14px;
  letter-spacing: 0.2px;
  margin: 10px 0;
`
