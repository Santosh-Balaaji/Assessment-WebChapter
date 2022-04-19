import React from 'react';
import { shallow } from 'enzyme';
import DatepickerComponent from '../DatePicker';

describe('DatePicker Component', () => {
  let wrapper;
  const childrenName = 'Submit';
  const mockFnOnChange = jest.fn();
  const mockFnOnBlur = jest.fn();
  const stubProps = {
    name: 'ExpiryDate',
    id: 'expirydate',
    value: null,
    onChange: mockFnOnChange,
    onBlur: mockFnOnBlur,
    placeholder: '',
    label: '',
  };

  beforeAll(() => {
    wrapper = shallow(<DatepickerComponent {...stubProps} />);
  });

  it('should render default component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange function on change of Event', () => {
    wrapper
      .find('PickerWithState[data-testid="keyboardDatePicker"]')
      .simulate('change', { target: { name: 'Sample', value: '12/12/2020' } });
    expect(mockFnOnChange).toHaveBeenCalled();
  });

  it('should call handleBlur function on Blur', () => {
    wrapper
      .find('PickerWithState[data-testid="keyboardDatePicker"]')
      .simulate('blur');
    expect(mockFnOnBlur).toHaveBeenCalled();
  });
});
