import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';

export const DocumentBody = styled(Box)`
  width:192px;
  height: 240px;
  padding: 32px 12px 12px 24px;
  display:flex;
  flex-direction: column;
  background: #ffffff;
  margin-bottom:39px;
  margin-left:32px;
  cursor: pointer;
  position:relative;
`;
export const Title = styled(Typography)`
  font-size:15px;
  line-height: 1.33;
  letter-spacing: 0.21px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight:500;
`;

export const C = styled('img')`
  height:18px;
  width: 16px;
  position: absolute;
  left: 14px;
  bottom: 12px;
`;
