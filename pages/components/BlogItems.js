import React from "react";
import BlogItem from "./BlogItem";
import tw from "tailwind-styled-components/dist/tailwind";
import blogList from "../../utils/data";
import Link from "next/link";
const BlogItems = () => {
  return (
    <Wrapper>
      {blogList.blogs.map((blog, index) => (
        <Link
          className="cursor-pointer"
          key={index}
          href={`./post/${blog.slug}`}
          passHref
        >
          <BlogItem
            blogHeading={blog.heading}
            blogImg={blog.img}
            blogText={blog.text}
          />
        </Link>
      ))}
    </Wrapper>
  );
};

export default BlogItems;
const Wrapper = tw.div`flex flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap`;
