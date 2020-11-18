import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
}

/**
 * @description: HTML button a 默认属性
 * @param {type} 
 * @return: 
 */
type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = BaseButtonProps & Partial<NativeButtonProps & NativeAnchorProps>

/**
 * ### 引用方法
 * ~~~js
 * import { Button } from "beeDesign"
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, style, ...restProps } = props;

  // 添加 class: btn, [btn-lg, btn-primary]
  const classes = classNames("btn", className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    "disabled": (btnType === "link") && disabled
  });

  if (btnType === "link") {
    return (
      <a
        className={classes}
        style={style}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        style={style}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: "default"
}

export default Button;