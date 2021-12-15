import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Logo from "./Logo";
const Footer = () => {
  return (
    <Wrapper>
      <FooterMain>
        <FooterText>
          flcecjlecjecejcleqjcecljeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeq lejceq
          cjqeceq b cgcqer cqreqicrqlriq ;rqecrcqe
        </FooterText>
        <FooterLinks>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">Contact Us</Link>
        </FooterLinks>
        <Socials>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faTwitter} />
        </Socials>
      </FooterMain>
      <AllRIghts>
        <Logo />
        <p>Copyright@2021-womenempowerment. All rights reserved </p>
      </AllRIghts>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = tw.div`w-full flex flex-col items-center mt-5 bg-secondaryColor text-tertiaryColor p-5 `;
const FooterMain = tw.div`w-full flex flex-col items-start gap-16 text-lg md:grid md:grid-cols-3`;
const FooterLinks = tw.div` flex flex-col gap-5 `;
const FooterText = tw.div`w-full`;
const Socials = tw.div`flex gap-5 md:flex-col`;
const AllRIghts = tw.div`w-full flex flex-col items-start md:flex-row md:items-end md:justify-between lg:justify-evenly`;
