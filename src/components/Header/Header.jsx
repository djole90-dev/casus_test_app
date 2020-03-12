import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { AuthActions } from '../../redux/actions'
import HeaderIcons from './HeaderIcons/HeaderIcons';
import Navigation from './Navigation/Navigation';
import DropdownMenu from '../Common/DropdownMenu/DropdownMenu';
import {
  HeaderContainer,
  Container,
  Logo,
  Text,
  ArrowDropDownIcon,
  DropdownWrapper,
  DropdownMenuContent,
  LogoutButton
} from './Header.styles';
import logo_image from '../../assets/logo.JPG';

const actionText = (
  <Fragment>
    <Text>Paul Müller</Text>
    <ArrowDropDownIcon />
  </Fragment>
);

const Header = ({ logoutUser }) => {
  return (
    <HeaderContainer>
      <Logo src={logo_image} alt="header logo" />
      <Container>
        <HeaderIcons />
        <Navigation />
      </Container>
      <DropdownWrapper>
        <DropdownMenu
          actionText={actionText}
          width={192}
          menuDistanceTop="14px"
          btntype="header-dropdown"
        >
          <DropdownMenuContent>
            <LogoutButton onClick={logoutUser}>
              <Text>Log out</Text>
            </LogoutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </DropdownWrapper>
    </HeaderContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(AuthActions.logout())
})

export default connect(null, mapDispatchToProps)(Header);
