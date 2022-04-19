import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import AppBarDrawerComponent from '../ASBAppBar';

describe('AppBar Component', () => {
  let wrapper;
  const mockHandleOnClose = jest.fn();
  const mockHandleOnOpen = jest.fn();
  const stubProps = {
    open: false,
    onClose: mockHandleOnClose,
    onOpen: mockHandleOnOpen,
  };

  beforeAll(() => {
    wrapper = shallow(<AppBarDrawerComponent {...stubProps} />);
  });

  it('should render default component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleOpen function on click of Burger Icon', () => {
    wrapper
      .find(
        'WithStyles(ForwardRef(IconButton))[data-testid="BurgerIconButton"]',
      )
      .simulate('click');
    expect(mockHandleOnOpen).toHaveBeenCalled();
  });

  it('should call handleClose function on click of Back Icon', () => {
    wrapper
      .find(
        'WithStyles(ForwardRef(IconButton))[data-testid="LeftArrorIconButton"]',
      )
      .simulate('click');
    expect(mockHandleOnClose).toHaveBeenCalled();
  });
});
