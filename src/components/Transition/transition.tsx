import React from "react";
import { CSSTransition } from "react-transition-group"
import { CSSTransitionProps } from "react-transition-group/CSSTransition"

type AnimationName = "zoom-in-top" | "zoom-in-left" | "zoom-in-right" | "zoom-in-bottom";

export interface TransitionProps extends CSSTransitionProps {
  animation?: AnimationName;
  wrapper? : boolean;
}
const Transition: React.FC<CSSTransitionProps> = (props) => {
  const { children, animation, wrapper, classNames, ...restProps } = props;
  return (
    <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}

export default Transition;