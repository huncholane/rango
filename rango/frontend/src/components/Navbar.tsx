import React from "react";
import { NavLink } from "react-router-dom";
import DjangoLink from "./DjangoLink";
import rango from "../assets/rango.png";

const activeLinkStyle = "m-auto bg-blue-400 px-5 py-2 rounded-full";
const inactiveLinkStyle =
  "m-auto bg-blue-200 px-5 py-2 rounded-full hover:bg-blue-400";

const Navbar = () => {
  return (
    <div className="h-16 shadow-md w-full flex">
      <NavLink to="/" className="my-auto h-3/4 rounded-full">
        <img
          src={rango}
          alt=""
          className="h-full hover:bg-blue-400 p-1 rounded-full shadow-md mx-3"
        />
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? activeLinkStyle : inactiveLinkStyle
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) =>
          isActive ? activeLinkStyle : inactiveLinkStyle
        }
      >
        Users
      </NavLink>
      <NavLink
        to="/random-endpoint"
        className={({ isActive }) =>
          isActive ? activeLinkStyle : inactiveLinkStyle
        }
      >
        404
      </NavLink>
      <DjangoLink to="api" className={inactiveLinkStyle}>
        API
      </DjangoLink>
      <DjangoLink to="admin" className={inactiveLinkStyle}>
        Admin
      </DjangoLink>
    </div>
  );
};

export default Navbar;
