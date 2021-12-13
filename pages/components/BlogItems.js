import React from "react";
import BlogItem from "./BlogItem";
import tw from "tailwind-styled-components/dist/tailwind";
const BlogItems = () => {
  const blogList = [
    {
      img: "/img/we3.jpg",
      heading: "heading of blog",
      text: "elfefhn/ i f/n w f;h;e/f;efhieif ewgihw lge/whgiwv rlvh irwvrwvrwvh rw/vrhvirhvA;WrhWVR vhr i;vhrv i;rhvr;vhr;i vr vhrVH: IRvrhvr hvrv Avrv rR'",
    },
    {
      img: "/img/we4.jpg",
      heading: "heading of blog",
      text: "elfefhn/ i f/n w f;h;e/f;efhieif ewgihw lge/whgiwv rlvh irwvrwvrwvh rw/vrhvirhvA;WrhWVR vhr i;vhrv i;rhvr;vhr;i vr vhrVH: IRvrhvr hvrv Avrv rR'",
    },
    {
      img: "/img/we1.jpg",
      heading: "heading of blog",
      text: "elfefhn/ i f/n w f;h;e/f;efhieif ewgihw lge/whgiwv rlvh irwvrwvrwvh rw/vrhvirhvA;WrhWVR vhr i;vhrv i;rhvr;vhr;i vr vhrVH: IRvrhvr hvrv Avrv rR'",
    },
    {
      img: "/img/we2.jpg",
      heading: "heading of blog",
      text: "elfefhn/ i f/n w f;h;e/f;efhieif ewgihw lge/whgiwv rlvh irwvrwvrwvh rw/vrhvirhvA;WrhWVR vhr i;vhrv i;rhvr;vhr;i vr vhrVH: IRvrhvr hvrv Avrv rR'",
    },
    {
      img: "/img/we5.jpg",
      heading: "heading of blog",
      text: "elfefhn/ i f/n w f;h;e/f;efhieif ewgihw lge/whgiwv rlvh irwvrwvrwvh rw/vrhvirhvA;WrhWVR vhr i;vhrv i;rhvr;vhr;i vr vhrVH: IRvrhvr hvrv Avrv rR'",
    },
    {
      img: "/img/we2.jpg",
      heading: "heading of blog",
      text: "elfefhn/ i f/n w f;h;e/f;efhieif ewgihw lge/whgiwv rlvh irwvrwvrwvh rw/vrhvirhvA;WrhWVR vhr i;vhrv i;rhvr;vhr;i vr vhrVH: IRvrhvr hvrv Avrv rR'",
    },
    {
      img: "/img/we4.jpg",
      heading: "heading of blog",
      text: "elfefhn/ i f/n w f;h;e/f;efhieif ewgihw lge/whgiwv rlvh irwvrwvrwvh rw/vrhvirhvA;WrhWVR vhr i;vhrv i;rhvr;vhr;i vr vhrVH: IRvrhvr hvrv Avrv rR'",
    },
  ];
  return (
    <Wrapper>
      {blogList.map((blog, index) => (
        <BlogItem
          key={index}
          blogHeading={blog.heading}
          blogImg={blog.img}
          blogText={blog.text}
        />
      ))}
    </Wrapper>
  );
};

export default BlogItems;
const Wrapper = tw.div`flex flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap`;
