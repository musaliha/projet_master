// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #003c50;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} Biblio-Hybride. Tous droits réservés.
    </FooterWrapper>
  );
};

export default Footer;
