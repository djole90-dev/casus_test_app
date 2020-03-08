import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Label = styled(Typography)`
  color: ${({theme}) => theme.palette.primary.textLight};
  font-size:14px;
  line-height: 1.5;
  letter-spacing: 0.2px;
`
