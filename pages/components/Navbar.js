import React, { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const navList = [
    { item: "About", link: "/about" },
    { item: "Projects", link: "/projects" },
    { item: "Services", link: "/services" },
    { item: "Clients", link: "/clients" },
    { item: "Blogs", link: "/blogs" },
  ];

  const [navMode, setNavMode] = useState("hidden");
  const router = useRouter();
  const navActive =
    "shadow-xl ease-in-out underline text-tertiaryColor rounded-t bg-secondaryColor";
  return (
    <Wrapper>
      <Humberger
        onClick={() =>
          navMode ? setNavMode("") : setNavMode("hidden relative")
        }
      >
        <Span
          className={`${navMode == "" ? "transform rotate-45 mt-5" : ""}`}
        ></Span>
        <Span className={`${navMode == "" ? "hidden" : ""}`}></Span>
        <Span
          className={`${navMode == "" ? "transform -rotate-45 mb-5" : ""}`}
        ></Span>
      </Humberger>

      <NavItems className={`${navMode}`}>
        {navList.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <NavItem className={router.pathname == item.link ? navActive : ""}>
              {item.item}
            </NavItem>
          </Link>
        ))}
      </NavItems>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = tw.nav` flex-1 my-10 flex flex-col relative items-end md:items-center`;
const Humberger = tw.div`bg-secondaryColor cursor-pointer w-12 h-12 flex flex-col relative justify-evenly md:hidden`;
const Span = tw.span`bg-primaryColor h-1 w-full bg-yellow-600 transition duration-300 ease-in-out `;
const NavItems = tw.div` w-full bg-primaryColor  min-w-max flex transition ease-in-out duration-700  flex-col items-left justify-evenly md:flex-row md:flex`;
const NavItem = tw.div`text-2xl font-bold my-2 p-1 pt-2 cursor-pointer text-secondaryColor hover:shadow-xl ease-in-out duration-200 hover:underline  rounded-t  `;
