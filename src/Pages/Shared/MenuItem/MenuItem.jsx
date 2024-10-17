import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  return (
    <div className="flex gap-x-2 gap-y-5 ">
      <picture>
        <img
          className="w-[120px] rounded-tl-none rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]"
          src={image}
          alt=""
        />
      </picture>
      <div className="uppercase">
        <h3>{name}---------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
