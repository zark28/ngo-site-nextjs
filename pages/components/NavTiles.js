import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
const NavTiles = () => {
  const tileList = [
    { tile: "Education", link: "#education", imgSrc: "/img/we2.jpg" },
    { tile: "Child Welfare", link: "#girlchild", imgSrc: "/img/we3.jpg" },
    { tile: "Women Empowerment", link: "#empowerment", imgSrc: "/img/we4.jpg" },
    { tile: "Livelihood", link: "#livelihood", imgSrc: "/img/we5.jpg" },
  ];
  return (
    <Wrapper>
      {tileList.map((item, index) => (
        <Link href={item.link} key={index} passHref>
          <NavTileItem
            className={
              index % 2 == 0 ? "bg-primaryColor" : "bg-secondaryColor-light"
            }
          >
            <span className="z-10 px-4 w-full text-lg font-bold text-tertiaryColor">
              {item.tile}
            </span>
            <NavTileImg
              className="mix-blend-darken"
              src={item.imgSrc}
              alt={item.imgSrc}
            />
          </NavTileItem>
        </Link>
      ))}
    </Wrapper>
  );
};

export default NavTiles;
const Wrapper = tw.div`w-full flex-col flex items-center justify-center md:flex-row gap-5 md:h-56`;
const NavTileItem = tw.div`h-96 md:h-full w-full flex items-end  relative cursor-pointer `;
const NavTileImg = tw.img`h-full w-full object-fill object-center absolute`;
