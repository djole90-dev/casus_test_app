import React from 'react';
import { shallow } from 'enzyme';
import DocumentCollection from './DocumentCollection';
import Document from '../Document/Document';
import { Container } from './DocumentCollection.styles';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('Document Collection Component', () => {
  const baseProps = {
    documents: [
      { title: '123', category: '123' },
      { title: '123', category: '1234' },
      { title: '123', category: '5' }
    ]
  };

  it('should match snapshot', () => {
    const component = setUp(DocumentCollection, baseProps);
    expect(component).toMatchSnapshot();
  });

  it('should render properly with documents', () => {
    const component = setUp(DocumentCollection, baseProps);
    const container = component.find(Container)
    const docItems = container.children().find(Document)

    expect(container.length).toBe(1);
    expect(docItems.length).toBe(3);
  });

  it('should render properly without documents', () => {
    const component = setUp(DocumentCollection, { documents: []});
    const container = component.find(Container)
    const docItems = container.children().find(Document)

    expect(container.length).toBe(1);
    expect(docItems.length).toBe(0);
  });
});
