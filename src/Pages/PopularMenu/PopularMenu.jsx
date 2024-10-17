import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("Menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(
          (items) => items.category == "popular"
        );
        setMenu(popularItems);
        console.log(popularItems);
      });
  }, []);
  return (
    <div className="my-8">
      <SectionTitle
        heading={"Form our Menu"}
        subHeading={"Popular Foods"}
      ></SectionTitle>

      <div className="grid grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
