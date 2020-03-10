import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Nav = styled('nav')`
  display:flex;
  justify-content:center;
`;

export const NavLink = styled(Link)`
  padding-bottom: 3px 0;
  border-bottom: 4px solid ${({ theme, active }) =>
    active === 'true' ? theme.palette.primary.blue : 'transparent'};
  &:not(:last-child) {
    margin-right: 42px;
  }
`;
export const Text = styled(Typography)`
  font-size:16px;
  letter-spacing: 0.2px;
  color: #ffffff;
  font-weight: 400;
  font-style:normal;
`;
