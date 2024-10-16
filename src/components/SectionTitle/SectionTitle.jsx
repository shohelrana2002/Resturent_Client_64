import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center w-full my-8 md:w-2/3">
      <h3 className="text-xl font-normal text-[#D99904] ">{subHeading}</h3>
      <div className="divider"></div>
      <h3 className="text-4xl text-black font-normal">{heading}</h3>
      <div className="divider"></div>
    </div>
  );
};

export default SectionTitle;
