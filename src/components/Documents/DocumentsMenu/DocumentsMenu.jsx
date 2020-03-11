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

const ListItem = ({ text, active, name, onClick }) => (
 
    <MenuItem onClick={onClick}>
      <Text active={active} data-categoryname={name}>
        {text}
      </Text>
    </MenuItem>
  
);

const DocumentsMenu = ({
  categories = [ 'Category 1', 'Category 2', 'Category 3' ]
}) => {
  const [ collapsed, setCollaps ] = useState(false);
  const [ selectedCategory, setSelectedCategory ] = useState(
    categories.length ? categories[0] : null
  );
  const handleListItemClick = (e) => {
    setSelectedCategory(e.target.dataset.categoryname)
  };

  return (
    <Container>
      <Box onClick={() => setCollaps((prev) => !prev)}>
        <Heading>
          {collapsed ? <ArrowDropDownIcon /> : <ArrowRightIcon />}CASUS vorlagen
        </Heading>
      </Box>
      <Collapse in={collapsed}>
        <ListContainer>
          {categories.map((cat) => (
            <ListItem
              onClick={handleListItemClick}
              text={cat}
              name={cat}
              key={cat}
              active={cat === selectedCategory ? 'true' : null}
            />
          ))}
        </ListContainer>
      </Collapse>
    </Container>
  );
};

export default DocumentsMenu;
