import React, { useState, Fragment } from 'react';
import HeaderIcons from './HeaderIcons';
import {
  StyledAppBar,
  StyledTab,
  Text,
  Logo,
  TabsContainer
} from './Header.styles';
import logo_image from '../../assets/logo.JPG';
import { Box, Tabs } from '@material-ui/core';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Text
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Text>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const Header = () => {
  const [ value, setValue ] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <StyledAppBar position="static">
        <Logo src={logo_image} alt="header logo" />
        <HeaderIcons />
        <TabsContainer>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <StyledTab label="Item One" {...a11yProps(0)} />
            <StyledTab label="Item Two" {...a11yProps(1)} />
            <StyledTab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </TabsContainer>
      </StyledAppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Fragment>
  );
};

export default Header;
