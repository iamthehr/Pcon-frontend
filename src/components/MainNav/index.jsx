import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: #000;
  padding: 1rem;
`;

const Bars = styled(FaBars)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MainNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavLinks to="/">Home</NavLinks>
      <NavLinks to="/about">About</NavLinks>
      <NavLinks to="/contact">Contact</NavLinks>
      <Bars onClick={handleToggle} />
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default MainNav;
