import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const Heading = styled(Typography)`
  font-size:26px;
  font-weight:500;
  line-height: 1.23;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom:49px;
  letter-spacing: .2px;
`;
