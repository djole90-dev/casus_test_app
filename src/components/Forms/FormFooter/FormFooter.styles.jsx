import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Text = styled(Typography)`
  line-height: 1.57;
  letter-spacing: 0.2px;
  font-size:14px;
  color: ${({ theme }) => theme.palette.primary.textLight};
  text-aligh:center;
  margin-top: 30px;
`;
export const URL = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.blue};
  font-weight: 500;
  margin-left:2px;
  font-family:inherit;
`;
