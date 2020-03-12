import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';

export const CopySection = styled(Box)`
  width: 41.1%;
  height:100%;
  background: ${({ theme }) => theme.palette.primary.main};
  display:flex;
  align-items:center;
  padding-right: 2.6%;
  padding-left: 1.36%;
`;

export const CopyContent = styled(Box)`
  color: #fff;
  width:311px;
  margin: 0 auto;
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
  display:flex;
`;

export const AuthContent = styled(Box)`
  width:320px;
  padding-right: 34px;
  margin: 0 auto;
  display: flex;
  align-items:flex-start;
`

export const Container = styled(Box)`
  display:flex;
  height:100%;
`;
