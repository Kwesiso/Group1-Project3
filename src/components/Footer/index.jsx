import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { footerNav, socialNav } from "../../constants";
import { logo_small } from "../../assets";
import * as F from './styles';

const Footer = () => {
  return (
    <F.FooterStyled>
      <F.FooterContainer>
        <F.FooterContent>
          <F.TextContainer>
            <F.Heading>Find your next great opportunity!</F.Heading>
            <p>
              Jobs is a curated job board of the best jobs for developers,
              designers and marketers in the tech industry.
            </p>
            <a href="/jobs">
              <Button type1="primary" type2="default" value="Browse jobs" />
            </a>
          </F.TextContainer>

          <F.FooterListContainer>
            <F.FooterList>
              <F.Heading>Menu</F.Heading>
              {footerNav.map((link) => (
                <F.ListItem key={link.id}>
                  <a href={link.link}>{link.title}</a>
                </F.ListItem>
              ))}
            </F.FooterList>

            {/* social media links */}
            <F.FooterList>
              <F.Heading>Follow Us</F.Heading>
              {socialNav.map((link) => (
                <F.ListItem key={link.id}>
                  <F.AnchorTag href={link.link}>
                    <F.SocialIcon src={link.icon} alt="social-icon" />
                    {link.title}
                  </F.AnchorTag>
                </F.ListItem>
              ))}
            </F.FooterList>
          </F.FooterListContainer>
        </F.FooterContent>

        <F.FooterBottom>
          <a href="/">
            <F.CompanyLogo src={logo_small} alt="company-logo" />
          </a>
          <p>
            © Copyright Jobs - Designed by{" "}
            <a
              href="https://brixtemplates.com/"
              target="_blank"
              style={{ color: "var(--color-primary-1)" }}
            >
              {" "}
              BRIX Templates.
            </a> Developed by Raluca Curt.
          </p>
        </F.FooterBottom>
      </F.FooterContainer>
    </F.FooterStyled>
  );
};

export default Footer;
