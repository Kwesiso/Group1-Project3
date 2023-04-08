import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo_large, hamburger, close } from "../../assets";
import { navLinks } from "../../constants";
import Button from "../Button";
import * as N from "./styles";

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <>
      <N.NavbarStyled>
        <N.NavContainer>
          <N.LogoContainer href="/">
            <N.Logo src={logo_large} alt="logo" />
          </N.LogoContainer>

          <N.MobileMenu onClick={() => setOpenMobileNav(!openMobileNav)}>
            <N.MenuIconContainer>
              <N.MenuIcon
                src={openMobileNav ? close : hamburger}
                alt="menu"
                openMobileNav={openMobileNav}
              />
            </N.MenuIconContainer>
          </N.MobileMenu>

          <N.DesktopMenu>
            <N.NavList>
              {navLinks.map((link) => (
                <N.NavItem
                  key={link.id}
                  active={activeItem === link.title ? true : false}
                  onClick={() => setActiveItem(link.title)}
                >
                  <Link to={link.link}>{link.title}</Link>
                </N.NavItem>
              ))}
            </N.NavList>

            <N.Container>
              <N.ButtonContainer>
                <a href='/jobs'>
                <Button
                  type1="primary"
                  type2="default"
                  value="Browse Jobs"
                />
                </a>
              </N.ButtonContainer>
            </N.Container>
          </N.DesktopMenu>
        </N.NavContainer>
      </N.NavbarStyled>

      <N.MobileNav openMobileNav={openMobileNav}>
        <N.MobileNavContainer openMobileNav={openMobileNav}>
          <N.NavList>
            {navLinks.map((link) => (
              <N.NavItem
                key={link.id}
                active={activeItem === link.title ? true : false}
                onClick={() => setActiveItem(link.title)}
              >
                <Link to={link.link}>{link.title}</Link>
              </N.NavItem>
            ))}
          </N.NavList>

          <N.Container>
            <N.ButtonContainer>
              <Button
                type1="primary"
                type2="default"
                value="Browse Jobs"
                width="100%"
                href="/browse"
              />
            </N.ButtonContainer>
          </N.Container>
        </N.MobileNavContainer>
      </N.MobileNav>
    </>
  );
};

export default Navbar;
