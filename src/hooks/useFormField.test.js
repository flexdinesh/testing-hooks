import React from 'react';
import { shallow } from 'enzyme';
import useFormField from './useFormField';

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

/* Test implementation details */
describe('useFormField', () => {
  it('should render', () => {
    let wrapper = shallow(<HookWrapper />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should set init value', () => {
    let wrapper = shallow(<HookWrapper hook={() => useFormField('')} />);

    let { hook } = wrapper.find('div').props();
    let [val, onChange, isValid] = hook;
    expect(val).toEqual('');

    wrapper = shallow(<HookWrapper hook={() => useFormField('marco')} />);

    ({ hook } = wrapper.find('div').props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('marco');
  });

  it('should set the right val value', () => {
    let wrapper = shallow(<HookWrapper hook={() => useFormField('marco')} />);

    let { hook } = wrapper.find('div').props();
    let [val, onChange, isValid] = hook;
    expect(val).toEqual('marco');

    onChange({ target: { value: 'polo' } });

    ({ hook } = wrapper.find('div').props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('polo');
  });

  it('should set the right isValid value', () => {
    let wrapper = shallow(<HookWrapper hook={() => useFormField('marco')} />);

    let { hook } = wrapper.find('div').props();
    let [val, onChange, isValid] = hook;
    expect(val).toEqual('marco');
    expect(isValid).toEqual(true);

    onChange({ target: { value: 'polo' } });

    ({ hook } = wrapper.find('div').props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('polo');
    expect(isValid).toEqual(true);

    onChange({ target: { value: '' } });

    ({ hook } = wrapper.find('div').props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('');
    expect(isValid).toEqual(false);
  });
});
