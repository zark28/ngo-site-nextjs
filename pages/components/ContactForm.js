import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import MainHeading from "./MainHeading";
const ContactForm = () => {
  const inputClass =
    "py-2 px-4 w-80 md:w-60 text-lg rounded-2xl bg-tertiaryColor";
  return (
    <Wrapper>
      {/* <ContactImg src="./img/we4.jpg" className="opacity-75" /> */}
      <MainHeading text="Contact Us" clas="text-primaryColor" />
      <FormWrapper>
        <div className=" flex flex-col gap-10">
          <Span>
            <input
              className={inputClass}
              type="text"
              placeholder="Your Full Name"
            />
            <input
              className={inputClass}
              type="email"
              placeholder="Email Address"
            />
          </Span>
          <Span>
            <select className={inputClass}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
            <input className={inputClass} type="tel" placeholder="Phone" />
          </Span>
          <span>
            <textarea className=" bg-tertiaryColor w-full h-40 my-5"></textarea>
            <input
              className="bg-primaryColor"
              type="submit"
              value="SEND MESSAGE"
            />
          </span>
        </div>
      </FormWrapper>
    </Wrapper>
  );
};

export default ContactForm;
const Wrapper = tw.div`w-full bg-secondaryColor-light  relative  `;
const FormWrapper = tw.div`p-4 z-10`;
const Span = tw.div` w-full flex flex-wrap gap-10 items-center justify-between`;
// const ContactImg = tw.img`absolute w-full h-full object-fill top-0 left-0`;
