import React from "react";
import { IoMdStar } from "react-icons/io";
import {CartContext} from "../context";
import { useContext } from "react";

const SinglePerfume = ({
  id,
  image,
  title,
  rating,
  price,
  itemsLeft,
  oldPrice,
  inCart,
}) => {
  const {addToCart} = useContext(CartContext)
  return (
    <div
      style={{ width: "256.62px" }}
      className="border border-1 border-secondary rounded-2 mx-auto"
    >
      <img src={image} alt={title} className="w-100" />
      <div className="p-3">
        <h2 className="fs-6 fw-bold mb-2">{title}</h2>
        <div className="d-flex gap-2 mb-0">
          <IoMdStar className="text-warning" />
          <IoMdStar className="text-warning" />
          <IoMdStar className="text-warning" />
          <IoMdStar className="text-warning" />
          <p className="text-dark fw-bold fs-3">{rating}</p>
          <p>({itemsLeft})</p>
        </div>
        <div className="d-flex gap-2">
          <h2 className="fs-5 main-color">#{price}</h2>
          <h2 className="fs-5 text-decoration-line-through">#{oldPrice}</h2>
        </div>
        <button
          style={{ height: "40px" }}
          className={`w-100 rounded-2 text-white border-0 ${
            inCart ? 'bg-secondary-subtle' : 'main-color-bg'
          }`}
          onClick={()=> addToCart({image, title, price, id})}
          disabled = {inCart}
        >
          {inCart ? 'Added To Cart' : 'Add To Cart'}

        </button>
      </div>
    </div>
  );
};

export default SinglePerfume;