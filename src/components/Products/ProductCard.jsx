import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const ProductCard = ({
  id,
  image,
  title,
  rating,
  mrp,
  price,
  discount,
  brand,
  modelName,
  cartData,
}) => {
  return (
    <>
      <div className="product-card">
        <div className="content">
          <div className="product-image">
            <img src={image} alt="" />
          </div>
          <div className="product-content">
            <div className="details">
              <Link to={`/productdetails/${title}`}>
                <div className="title">
                  <h1>{title}</h1>
                </div>
              </Link>
              <div className="rating">
                <strong>Rating:</strong>
                {rating === 4.5 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </>
                ) : rating === 3.5 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                  </>
                ) : rating === 4 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </>
                ) : rating === 3 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="amount">
                <h2 className="price">
                  <span className="discount">-{discount}%</span>
                  <sup>
                    <LiaRupeeSignSolid />
                  </sup>
                  {price}
                </h2>
                <h3 className="mrp">
                  <span>M.R.P:</span>
                  <sup>
                    <LiaRupeeSignSolid />
                  </sup>
                  <span>{mrp}</span>
                </h3>
              </div>
              <div className="brand-model">
                <h3>
                  <strong>Brand:</strong> {brand}
                </h3>
                {modelName ? (
                  <>
                    <h3>
                      <strong>Model Name:</strong> {modelName}
                    </h3>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="btns">
              <button>Buy Now</button>
              <button
                onClick={() =>
                  cartData(
                    id,
                    title,
                    price,
                    discount,
                    mrp,
                    rating,
                    brand,
                    image
                  )
                }
              >
                <BsCart4 />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
