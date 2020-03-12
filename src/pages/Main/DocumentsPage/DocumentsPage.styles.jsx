import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import SearchIconEl from '@material-ui/icons/Search';

export const TopContent = styled(Box)`
  width:100%;
  display:flex;
  margin-bottom:28px;
`;

export const MainContent = styled(Box)`
  display:flex;
`;
export const MenuContainer = styled(Box)`
  margin-right:auto;
`;
export const DocumentsContainer = styled(Box)`
  width:896px;
`;

export const Heading = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size:18px;
  line-height: 1.67;
  letter-spacing: 0.3px;
  font-weight:bold;
  margin-right:auto;
`;

export const SearchIcon = styled(SearchIconEl)`
  font-size:18px;
  color: ${({ theme }) => theme.palette.primary.main};
  align-self: center;
`;




