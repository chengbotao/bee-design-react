import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input, { InputProps } from "./input";

const defaultProps = {
  onChange: jest.fn()
}

const testProps: InputProps = {
  size: 'lg',
  className: "bee-input"
}

const disabledProps: InputProps = {
  disabled: true,
  onChange: jest.fn()
}

describe('Input component', () => {
  it('should render the correct default input', () => {
    const wrapper = render(<Input {...defaultProps} placeholder="default"></Input>);
    const element = wrapper.getByPlaceholderText('default') as HTMLInputElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('INPUT');
    expect(element.disabled).toBeFalsy();
  })
})