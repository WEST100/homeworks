import React from "react";

const Goods = ({ good }) => {
  return (
    <div className="item">
      <div className="img_container">
        <img className="goods_img" src={good.img} alt="foto" />
      </div>

      <p className="goods_name">{good.name}</p>
      <p className="goods_price">{good.price}</p>
    </div>
  );
};

export default Goods;
