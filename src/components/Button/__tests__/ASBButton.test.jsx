import React from 'react';
import { shallow } from 'enzyme';
import ASBButton from '../ASBButton';

describe('ASB Button Component', () => {
  let wrapper, wrapper1;
  const childrenName = 'Submit';
  const mockOnClick = jest.fn();
  const stubProps = {
    children: childrenName,
    color: 'primary',
    minWidth: 250,
    size: 'medium',
    variant: 'outlined',
    onClick: mockOnClick,
  };

  const mockProps = {
    children: childrenName,
    color: 'success',
    minWidth: 250,
    size: 'medium',
    variant: 'outlined',
    onClick: mockOnClick,
  };

  beforeAll(() => {
    wrapper = shallow(<ASBButton {...stubProps} />);
    wrapper1 = shallow(<ASBButton {...mockProps} />);
  });

  it('should render default component', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper1).toMatchSnapshot();
  });

  it('should call handleClick function on click of Button', () => {
    wrapper
      .find('WithStyles(ForwardRef(Button))[data-testid="DefaultButton"]')
      .simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should set the name passed as children', () => {
    expect(
      wrapper
        .find('WithStyles(ForwardRef(Button))[data-testid="DefaultButton"]')
        .text(),
    ).toEqual(childrenName);
  });

  it('should display styled button when color is present in colorList', () => {
    expect(
      wrapper1
        .find('WithStyles(ForwardRef(Button))[data-testid="StyledButton"]')
        .text(),
    ).toEqual(childrenName);
  });
});
