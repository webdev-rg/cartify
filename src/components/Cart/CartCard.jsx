import React from "react";
import "./Cart.css"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export const CartCard = ({title, price, discount, mrp, rating, brand, image}) => {
  return (
    <>
      <div className="cart-card">
        <div className="content">
          <div className="cart-image">
            <img src={image} alt="" />
          </div>
          <div className="cart-content">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
