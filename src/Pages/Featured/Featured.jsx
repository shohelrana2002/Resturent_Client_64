import React from "react";
import featured from "../../assets/home/featured.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${featured})`,
        backgroundRepeat: "no-repeat",
      }}
      className="my-12 md:min-h-screen"
    >
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="flex justify-center items-center my-4 mx-20  gap-x-8">
        <div>
          <picture>
            <img className="w-[648px]" src={featured} alt="" />
          </picture>
        </div>
        <div className="">
          <h3>
            March 20, 2023 <br />
            WHERE CAN I GET SOME?
          </h3>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-t-0 border-l-0 border-r-0  btn-secondary">
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
