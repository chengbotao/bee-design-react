import React, { FC, ReactNode, MouseEvent, Children, cloneElement, useContext, useState, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import Icon from "../Icon/icon"
import Transition from "../Transition/transition"

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props;
  const context = useContext(MenuContext);
  const openSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened = (index && context.mode === "vertical") ? openSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames("submenu", className, {
    "is-active": context.index === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical"
  })

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  }
  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    setOpen(toggle)
  }

  const clickEvent = context.mode === "vertical" ? {
    onClick: handleClick
  } : {}
  const hoverEvent = context.mode !== "vertical" ? {
    onMouseEnter: (e: MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: MouseEvent) => { handleMouse(e, false) }
  } : {}

  const renderChildren = () => {
    const subMenuClasses = classNames("submenu-items", {
      "menu-open": menuOpen
    })
    const childrenComponent = Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;

      if (displayName === "MenuItem") {
        return cloneElement(childElement, {
          index: `${index}-${i}`
        });
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component!")
      }
    })
    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-bottom" classNames="zoom-in-left">
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvent}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"></Icon>
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = "SubMenu";

export default SubMenu;