import React from "react";
import { NavLink, Route, useParams, useRouteMatch } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/add-book">
            Add Book
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/find-book">
            Find Book
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
}

export default Header;
