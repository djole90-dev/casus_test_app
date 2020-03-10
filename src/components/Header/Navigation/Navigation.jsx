import React from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, NavLink, Text } from './Navigation.styles';

const comparePathname = (pathname, path) =>
  pathname === path ? 'true' : 'false';

const Navigation = ({ location: { pathname } }) => (
  <Nav>
    <NavLink to="/" active={comparePathname(pathname, '/')}>
      <Text>Dashboard</Text>
    </NavLink>
    <NavLink to="/dokumente" active={comparePathname(pathname, '/dokumente')}>
      <Text>Dokumente</Text>
    </NavLink>
    <NavLink to="/vorlagen" active={comparePathname(pathname, '/vorlagen')}>
      <Text>Vorlagen</Text>
    </NavLink>
    <NavLink
      to="/rechtsberatung"
      active={comparePathname(pathname, '/rechtsberatung')}
    >
      <Text>Rechtsberatung</Text>
    </NavLink>
  </Nav>
);

export default withRouter(Navigation);
