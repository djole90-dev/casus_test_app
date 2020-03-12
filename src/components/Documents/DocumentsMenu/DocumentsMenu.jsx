import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
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

export const ListItem = ({ text, active, name, onClick }) => (
  <MenuItem onClick={onClick}>
    <Text active={active} data-categoryname={name}>
      {text}
    </Text>
  </MenuItem>
);


export const DocumentsMenu = ({ categories, filterDocumentsByCategory }) => {
  const [ isOpen, setCollaps ] = useState(true);
  const [ selectedCategory, setSelectedCategory ] = useState(null);

  const handleListItemClick = (e) => {
    setSelectedCategory(e.target.dataset.categoryname);
  };

  const handleArrowClick = () => setCollaps(prev => !prev)

  useEffect(() => {
    filterDocumentsByCategory(selectedCategory)
  }, [selectedCategory, filterDocumentsByCategory])

  return (
    <Container>
      <Box onClick={() => setSelectedCategory(null)}>
        <Heading active={!selectedCategory ? 'true' : null}>
          {isOpen ? (
            <ArrowDropDownIcon onClick={handleArrowClick} />
          ) : (
            <ArrowRightIcon onClick={handleArrowClick} />
          )}CASUS vorlagen
        </Heading>
      </Box>
      <Collapse in={isOpen}>
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

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

DocumentsMenu.propTypes = {
  categories: PropTypes.array.isRequired,
  filterDocumentsByCategory: PropTypes.func.isRequired
}


export default DocumentsMenu
