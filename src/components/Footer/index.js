import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
   FaInstagram,
    FaVk,
    FaTwitter,
    FaTwitch,
    FaYoutube
} from 'react-icons/fa'
import { AiFillLinkedin } from "react-icons/ai";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> More Info</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact me</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Contact me </FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support </FooterLink>
              <FooterLink to="/signin">Sponsor Ship</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">Twitch</FooterLink>
              <FooterLink to="/signin">YouTube</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              {" "}
              Quint
            </SocialLogo>
            <WebsiteRights>
              {" "}
              Quint © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <a href="https://www.instagram.com/quintdev/">
                <SocialIconLink target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
              </a>
              <a href="https://vk.com/chekars">
                <SocialIconLink target="_blank" aria-label="Vk">
                  <FaVk />
                </SocialIconLink>
              </a>
              <a href="https://www.linkedin.com/in/christian-veter/">
                <SocialIconLink target="_blank" aria-label="Twitter">
                  <AiFillLinkedin />
                </SocialIconLink>
              </a>
              <a href="https://www.twitch.tv/quinttq">
                <SocialIconLink target="_blank" aria-label="Twitch">
                  <FaTwitch />
                </SocialIconLink>
              </a>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer
