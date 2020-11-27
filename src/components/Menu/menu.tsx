import React, { FC, CSSProperties, ReactNode, Children, cloneElement, createContext, useState, FunctionComponentElement } from "react";
import classNames from "classnames";
import { SubMenuProps } from "./subMenu";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[]
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({
  index: "0"
})

const Menu: FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, children, onSelect, defaultOpenSubMenus } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical"
  });

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps> | FunctionComponentElement<SubMenuProps>;
      const { displayName } = childElement.type;

      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return cloneElement(childElement, {
          index: index.toString()
        });
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component!")
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: []
}

export default Menu