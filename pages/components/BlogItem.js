import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
const BlogItem = ({ blogImg, blogHeading, blogText }) => {
  return (
    <Wrapper>
      <BlogImg src={blogImg} alt={blogImg} />
      <BlogText>
        <BlogHeading>{blogHeading}</BlogHeading>
        <BlogDetails>
          <summary className="my-2 text-lg cursor-pointer">Read More</summary>
          <p>{blogText}</p>
        </BlogDetails>
      </BlogText>
    </Wrapper>
  );
};

export default BlogItem;
const Wrapper = tw.div`w-full md:w-96`;
const BlogImg = tw.img`w-full h-auto object-contain`;
const BlogText = tw.div`w-full`;
const BlogHeading = tw.h3`w-full text-lg font-bold`;
const BlogDetails = tw.details`w-full font-bold mb-4`;
