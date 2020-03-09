import React, { useState } from 'react';
import { Collapse, Box } from '@material-ui/core';
import {
  Container,
  Heading,
  ArrowDropDownIcon,
  ArrowRightIcon,
  ListContainer,
  MenuItem,
  Text
} from './DocumentsMenu.styles';

const DocumentsMenu = () => {
  const [ collapsed, setCollaps ] = useState(false);

  return (
    <Container>
      <Box onClick={() => setCollaps((prev) => !prev)}>
        <Heading>
          {collapsed ? <ArrowDropDownIcon /> : <ArrowRightIcon />}CASUS vorlagen
        </Heading>
      </Box>
      <Collapse in={collapsed}>
        <ListContainer>
          <MenuItem>
            <Text>Menu 1</Text>
          </MenuItem>
          <MenuItem>
            <Text>Menu 2</Text>
          </MenuItem>
          <MenuItem>
            <Text>Menu 3</Text>
          </MenuItem>
        </ListContainer>
      </Collapse>
    </Container>
  );
};

export default DocumentsMenu;
