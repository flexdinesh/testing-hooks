import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

/* Test user observable behaviour */
describe('LoginForm', () => {
  it('should render', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should not set input fields as error on first render', () => {
    const wrapper = shallow(<LoginForm />);

    const username = wrapper.find('input[type="text"]');
    expect(username.hasClass('error')).toBeFalsy();

    const password = wrapper.find('input[type="password"]');
    expect(password.hasClass('error')).toBeFalsy();
  });

  it('should disable submit button on first render', () => {
    const wrapper = shallow(<LoginForm />);

    const submitBtn = wrapper.find('button');
    expect(submitBtn.hasClass('disabled')).toBeTruthy();
  });

  it('should show error when invalid username is entered', () => {
    const wrapper = shallow(<LoginForm />);

    let username = wrapper.find('input[type="text"]');
    expect(username.hasClass('error')).toBeFalsy();

    username.props().onChange({
      target: {
        value: 'abc'
      }
    });
    username = wrapper.find('input[type="text"]');
    expect(username.hasClass('error')).toBeFalsy();

    // remove username
    username.props().onChange({
      target: {
        value: ''
      }
    });
    username = wrapper.find('input[type="text"]');
    expect(username.hasClass('error')).toBeTruthy();
  });

  it('should show error when invalid password is entered', () => {
    const wrapper = shallow(<LoginForm />);

    let password = wrapper.find('input[type="password"]');
    expect(password.hasClass('error')).toBeFalsy();

    password.props().onChange({
      target: {
        value: 'abc'
      }
    });
    password = wrapper.find('input[type="password"]');
    expect(password.hasClass('error')).toBeFalsy();

    // remove password
    password.props().onChange({
      target: {
        value: ''
      }
    });
    password = wrapper.find('input[type="password"]');
    expect(password.hasClass('error')).toBeTruthy();
  });

  it.only('should disable sumbit button when username/password is invalid', () => {
    const wrapper = shallow(<LoginForm />);

    // submit button disabled on first render - un & pw empty
    let submitBtn = wrapper.find('button');
    expect(submitBtn.hasClass('disabled')).toBeTruthy();

    // change username
    let username = wrapper.find('input[type="text"]');
    username.props().onChange({
      target: {
        value: 'abc'
      }
    });

    // submit button still disabled - password is empty
    submitBtn = wrapper.find('button');
    expect(submitBtn.hasClass('disabled')).toBeTruthy();

    // change password
    let password = wrapper.find('input[type="password"]');
    password.props().onChange({
      target: {
        value: 'abc'
      }
    });

    // submit button enabled
    submitBtn = wrapper.find('button');
    expect(submitBtn.hasClass('disabled')).toBeFalsy();

    // remove password
    password = wrapper.find('input[type="password"]');
    password.props().onChange({
      target: {
        value: ''
      }
    });

    // submit button disabled - password is empty
    submitBtn = wrapper.find('button');
    expect(submitBtn.hasClass('disabled')).toBeTruthy();
  });
});
