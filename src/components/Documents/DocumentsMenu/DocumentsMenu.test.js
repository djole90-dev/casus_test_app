import React from 'react';
import { shallow } from 'enzyme';
import { ListItem, DocumentsMenu } from './DocumentsMenu';
import { Box } from '@material-ui/core'
import {
  Container,
  ListContainer
} from './DocumentsMenu.styles';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('Document Menu Component', () => {
  const baseProps = {
    categories: ['Cat1', '2', '3'],
    filterDocumentsByCategory: jest.fn()
  };

  it('should match snapshot', () => {
    const component = setUp(DocumentsMenu, baseProps);
    expect(component).toMatchSnapshot();
  });

  it('should render properly with categories', () => {
    const component = setUp(DocumentsMenu, baseProps);
    const container = component.find(Container);
    const headingWrapper = container.children().find(Box);
    const listContainer = component.find(ListContainer)
    const listItems = component.find(ListItem)

    expect(container.length).toBe(1);
    expect(headingWrapper.length).toBe(1)
    expect(listContainer.length).toBe(1)
    expect(listItems.length).toBe(3)
  });

  it('should render properly without categories', () => {
    const component = setUp(DocumentsMenu, {...baseProps, categories: []});
    const container = component.find(Container);
    const headingWrapper = container.children().find(Box);
    const listContainer = container.children().find(ListContainer)
    const listItems = listContainer.children().find(ListItem)

    expect(container.length).toBe(1);
    expect(headingWrapper.length).toBe(1)
    expect(listContainer.length).toBe(1)
    expect(listItems.length).toBe(0);
    
  });
});
