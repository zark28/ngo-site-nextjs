import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faHandHoldingUsd,
  faGlobe,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

import tw from "tailwind-styled-components/dist/tailwind";
const AboutItems = () => {
  const activityList = [
    { icon: faUserGraduate, activity: "Education program" },
    { icon: faHandHoldingUsd, activity: "Online Fundraising" },
    { icon: faGlobe, activity: "Save the World" },
    { icon: faHandsHelping, activity: "Other" },
  ];
  return (
    <Wrapper>
      <AboutText>
        By default, only responsive, focus-within and focus variants are
        generated for z-index utilities. You can control which variants are
        generated for the z-index utilities by modifying the zIndex property in
        the variants section of your tailwind.config.js file. For example, this
        config will also generate hover and active variants:If you’d like to add
        any negative z-index classes that take the same form as Tailwind’s
        negative margin classes, prefix the keys in your config file with a
        dash:
      </AboutText>
      <AboutActivities className="">
        {activityList.map((item, index) => (
          <Activity key={index}>
            <FontAwesomeIcon className="w-1/3 mr-4" icon={item.icon} />
            {item.activity}
          </Activity>
        ))}
      </AboutActivities>
    </Wrapper>
  );
};

export default AboutItems;
const Wrapper = tw.div`w-full flex flex-col gap-10 px-4 mb-10`;
const AboutText = tw.div`w-full text-xl `;
const AboutActivities = tw.div`flex-1 grid grid-cols-2 gap-10`;
const Activity = tw.div`flex w-full items-center text-lg font-bold`;
