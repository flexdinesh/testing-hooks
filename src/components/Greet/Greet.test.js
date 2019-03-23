import React from 'react';
import { shallow } from 'enzyme';
import Greet from './Greet';

/* Test user observable behaviour */
describe('Greet', () => {
  it('should render', () => {
    const wrapper = shallow(<Greet />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render with default name when not value not set in props', () => {
    const wrapper = shallow(<Greet />);

    const div = wrapper.find('div');
    expect(div.text()).toEqual('Hello, User!');
  });
});
