import React from "react";
import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const Card = ({ products }) => {
  const navigate = useNavigate();
  function handleProductClick(id) {
    navigate(`/product/${id}`);
  }
  //   const DISCOUNTED_PRICE = Math.floor(product.discountPercentage / 100 * product.price);
  //   const TOTAL_PRICE = product.price - DISCOUNTED_PRICE;
  return (
    <div className=" flex flex-wrap text-black gap-5 justify-center p-4 md:justify-start md:ml-5">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="cursor-pointer relative w-[300px] h-[250px] flex flex-col justify-center items-center border-gray-500 border-[0.8px] border-solid rounded-md hover:shadow-card group transition "
          >
            <div className="h-[150px] w-[150px]">
              <img
                src={product.image}
                alt="Items__Image"
                className="h-full w-full rounded-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex justify-evenly items-start w-full px-2">
              <h4 className="">{product.title.slice(0, 40)} ...</h4>
              <div>
                <div className="discount-price">
                  <h4 className="text-orange-700">${product.price}</h4>
                </div>
              </div>
            </div>{" "}
            <div
              className="absolute -right-5 top-0 cursor-pointer
              bg-pink-300 text-white p-1 text-3xl flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all "
            >
              <div className="bg-blue-500 p-1">
                <BsPlus title="add to cart" />
              </div>
              <AiOutlineEye
                onClick={() => handleProductClick(product.id)}
                title="view product"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;