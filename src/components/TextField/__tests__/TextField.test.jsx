import React from 'react';
import { shallow } from 'enzyme';
import ASBTextField from '../ASBTextField';

describe('ASB Text Field', () => {
  let wrapper;
  const mockFnOnChange = jest.fn();
  const mockFnOnBlur = jest.fn();
  const stubProps = {
    id: 'textfield',
    label: 'TextField',
    placeholder: 'Enter',
    size: 'small',
    variant: 'filled',
    inlineLabel: false,
    name: 'textfield',
    onChange: mockFnOnChange,
    fullWidth: false,
    value: 'Hello World',
    onBlur: mockFnOnBlur,
  };

  beforeAll(() => {
    wrapper = shallow(<ASBTextField {...stubProps} />);
  });

  it('should render default component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange on Change of Event', () => {
    wrapper
      .find('WithStyles(ForwardRef(TextField))[data-testid="TextField"]')
      .simulate('change', { target: { name: 'Sample', value: '12/12/2020' } });
    expect(mockFnOnChange).toHaveBeenCalled();
  });

  it('should call handleBlur function on Blur', () => {
    wrapper
      .find('WithStyles(ForwardRef(TextField))[data-testid="TextField"]')
      .simulate('blur');
    expect(mockFnOnBlur).toHaveBeenCalled();
  });
});
