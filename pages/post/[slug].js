import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import blogList from "../../utils/data";
const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blogItem = blogList.blogs.find((a) => a.slug === slug);
  if (!blogItem) {
    return <div>Product not found</div>;
  }
  return (
    <Wrapper>
      <Link href="/blogs" passHref>
        back to Blogs
      </Link>
      <BlogCard>
        <BlogImg src={blogItem.img} alt={blogItem.heading} />
        <BlogText>{blogItem.text}</BlogText>
      </BlogCard>
    </Wrapper>
  );
};

export default Blog;
const Wrapper = tw.div``;
const BlogImg = tw.img``;
const BlogText = tw.p``;
const BlogCard = tw.div``;
