import * as React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/page2">Page 2</NavLink>
    <NavLink to="/page3">Page 3</NavLink>
  </nav>
);

export default Header;
