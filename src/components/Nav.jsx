import React from "react";
import { NavLink } from "react-router-dom";
import styled from "../assets/style/Nav.module.css";

function Nav() {
  return (
    <nav className={styled.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/tutorial">Tutorial</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
