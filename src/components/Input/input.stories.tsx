import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "./input";

const defaultInput = () => {
  return (
    <>
      <Input></Input>
    </>
  )
}
const inputWithSize = () => {
  return (
    <>
      <Input size="lg"></Input>
      <Input size="sm"></Input>
    </>
  )
}
const inputWithDisabled = () => {
  return (
    <>
      <Input disabled></Input>
    </>
  )
}

storiesOf("Input<输入框>", module)
  .add("Input", defaultInput)
  .add("不同尺寸的 Input", inputWithSize)
  .add("禁用状态的 Input", inputWithDisabled)