import React from 'react';
import { shallow } from 'enzyme';
import Document from './Document';
import C from '../C_Logo/C_Logo';

import { Title, DocumentBody } from './Document.styles';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('Document Component', () => {
  const baseProps = {
    title: 'Title',
    category: '123'
  };

  it('should match snapshot', () => {
    const component = setUp(Document, baseProps);
    expect(component).toMatchSnapshot();
  });

  it('should render properly', () => {
    const component = setUp(Document, baseProps);
    const docwrapper = component.find(DocumentBody)
    const title = docwrapper.children().find(Title)
    const logo = docwrapper.children().find(C)
    expect(docwrapper.length).toBe(1);
    expect(title.length).toBe(1)
    expect(title.text()).toEqual('Title');
    expect(logo.length).toBe(1);
  });
});
