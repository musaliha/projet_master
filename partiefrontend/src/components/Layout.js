// src/components/Layout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
const Navbar = styled.nav`
  background-color: #005f73;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Brand = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.open ? "flex" : "none")};
    margin-top: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #ffd166;
  }
`;

const Wrapper = styled.main`
  padding: 2rem;
`;

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar>
        <Brand>📚 Biblio-Hybride</Brand>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <NavLinks open={menuOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/livres">Livres</NavLink>
          <NavLink to="/disponibles">Livres disponibles</NavLink>
          <NavLink to="/reserver"></NavLink>
          <NavLink to="/suivi">Suivi</NavLink>
          <NavLink to="/reservations">Réservations</NavLink>
        </NavLinks>
      </Navbar>
      <Wrapper>{children}</Wrapper>
      

<Footer />

    </>
  );
};

export default Layout;
