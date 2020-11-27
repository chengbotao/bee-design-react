import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, {ButtonProps, ButtonSize, ButtonType } from "./button";

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: "bee-button"
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>default</Button>);
    const element = wrapper.getByText('default') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element.disabled).toBeFalsy();
    expect(element).toHaveClass('btn btn-default');
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  })

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>primary</Button>);
    const element = wrapper.getByText('primary');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-primary btn-lg bee-button');
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType='link'>Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  })

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>disabled</Button>);
    const element = wrapper.getByText('disabled') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toBeCalled()
  })
})