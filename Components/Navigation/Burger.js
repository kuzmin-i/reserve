import React, { useContext } from "react";
import { useStore } from "../../Store/useStore";
import { MouseContext } from "../common/Cursor/mouse-context";

import { Nav } from "./styles";

const Burger = ({ iswhite, ...props }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const navIsOpened = useStore((state) => state.navIsOpened);
  const setNavIsOpened = useStore((state) => state.setNavIsOpened);

  const searchPanel = useStore(({ searchPanel }) => searchPanel);
  const showSearchPanel = useStore(({ showSearchPanel }) => showSearchPanel);

  /* черный / белый лого */
  const blackLogo = useStore((state) => state.blackLogo);

  return (
    <Nav.BurgerWrapper
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler(null)}
      data-status={searchPanel ? "close" : navIsOpened ? "opened" : "closed"}
      onClick={(e) => {
        e.stopPropagation();

        if (searchPanel) return showSearchPanel(false);
        setNavIsOpened(!navIsOpened);
      }}
    >
      <Nav.BurgerLine
        data-type={/*!blackLogo && !navIsOpened ? "white" : "black"*/ "black"}
      />
      <Nav.BurgerLine
        data-type={/*!blackLogo && !navIsOpened ? "white" : "black"*/ "black"}
      />
    </Nav.BurgerWrapper>
  );
};

export default Burger;
