import React, { Fragment } from 'react';
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
  DropdownMenuContent
} from './Header.styles';
import logo_image from '../../assets/logo.JPG';

const actionText = (
  <Fragment>
    <Text>Paul Müller</Text>
    <ArrowDropDownIcon />
  </Fragment>
);

const Header = () => {
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
        >
          <DropdownMenuContent>
            <Text>Log out</Text>
          </DropdownMenuContent>
        </DropdownMenu>
      </DropdownWrapper>
    </HeaderContainer>
  );
};

export default Header;
