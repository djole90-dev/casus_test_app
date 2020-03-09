import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';

export const CopySection = styled(Box)`
  width: 41.1%;
  height:100%;
  background: ${({ theme }) => theme.palette.primary.main};
  display:flex;
  align-items:center;
`;

export const CopyContent = styled(Box)`
  color: #fff;
  width:320px;
  margin-left:112px;
`;
export const HeadingContent = styled(Box)`
  margin-bottom: 32px;
`;
export const Heading = styled(Typography)`
  font-size:36px;
  line-height: 1.5;
  font-family:Butler;
`;
export const Text = styled(Typography)`
  font-size:16px;
  line-height: 1.5;
  font-weight:300;
`;
export const AuthSection = styled(Box)`
  flex-grow:1;
  background: ${({ theme }) => theme.palette.primary.bgLight};
  overflow-y:auto;
  padding: 80px 0;
`;

export const AuthContent = styled(Box)`
  width:320px;
  margin-right:278px;
  margin-left:auto;
`

export const Container = styled(Box)`
  display:flex;
  height:100%;
`;
