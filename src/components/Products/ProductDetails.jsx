import React, { useEffect, useState } from "react";
import "./Product.css";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { GoShieldCheck, GoTrophy } from "react-icons/go";

import { Link, useParams } from "react-router-dom";

export const ProductDetails = ({ data }) => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      const findProduct = data.find((item) => item.title === productName);
      setProduct(findProduct);
    }
  }, [productName, data]);

  if (!product) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <section className="product-detail-section">
        <div className="product-detail-container">
          <div className="image-container">
            <div className="main-image">
              <img src={product.mainImage} alt="" />
            </div>
            <div className="more-images">
              <div className="more-image">
                <img src={product.mainImage} alt="" />
              </div>
              {product.moreImages.map((img, index) => {
                return (
                  <div key={index} className="more-image">
                    <img src={img.image} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="detail-container">
            <header>
              <div className="detail-title">
                <h1>{product.title}</h1>
              </div>
              <div className="detail-rating">
                {product.rating === 4.5 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </>
                ) : product.rating === 3.5 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                  </>
                ) : product.rating === 4 ? (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </>
                ) : product.rating === 3 ? (
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
                <span>( {product.rating} )</span>
              </div>
              <div className="choice">
                <h2>Cartify's Choice for "{product.category}"</h2>
              </div>
            </header>
            <div className="detail-price">
              <span className="discount">-{product.discount}%</span>
              <span className="price">
                <sup>
                  <LiaRupeeSignSolid />
                </sup>
                {product.price}
              </span>
              <p>
                M.R.P: <span className="detail-mrp">{product.MRP()}</span>
              </p>
            </div>
            <div className="detail-btns">
              <button>Buy Now</button>
              <button>
                <Link to={`/cart`} >Add To Cart</Link>
              </button>
            </div>
            <div className="features">
              <div className="feature">
                <div className="icon">
                  <TbTruckDelivery />
                </div>
                <h2>Free Delivery</h2>
              </div>
              <div className="feature">
                <div className="icon">
                  <TbReplace />
                </div>
                <h2>10 Days Replacement</h2>
              </div>
              <div className="feature">
                <div className="icon">
                  <GoShieldCheck />
                </div>
                <h2>1 Year Warranty</h2>
              </div>
              <div className="feature">
                <div className="icon">
                  <GoTrophy />
                </div>
                <h2>Top Brand</h2>
              </div>
            </div>
            <div className="info">
              {product.brand ? (
                <>
                  <span>
                    <strong>Brand: </strong>
                    {product.brand}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.modelName ? (
                <>
                  <span>
                    <strong>Model Name: </strong>
                    {product.modelName}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.color ? (
                <>
                  <span>
                    <strong>Color: </strong>
                    {product.color}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.OS ? (
                <>
                  <span>
                    <strong>Operating System: </strong>
                    {product.OS}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.memory ? (
                <>
                  <span>
                    <strong>Memory: </strong>
                    {product.memory}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.screenSize ? (
                <>
                  <span>
                    <strong>Screen Size: </strong>
                    {product.screenSize}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.HDD ? (
                <>
                  <span>
                    <strong>HDD: </strong>
                    {product.HDD}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.resolution ? (
                <>
                  <span>
                    <strong>Resolution: </strong>
                    {product.resolution}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.RAM ? (
                <>
                  <span>
                    <strong>RAM: </strong>
                    {product.RAM}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.CPU ? (
                <>
                  <span>
                    <strong>CPU: </strong>
                    {product.CPU}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.specialFeature ? (
                <>
                  <span>
                    <strong>Special Feature: </strong>
                    {product.specialFeature}
                  </span>
                </>
              ) : (
                ""
              )}
              {product.connectivity ? (
                <>
                  <span>
                    <strong>Connectivity: </strong>
                    {product.connectivity}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="about-product">
              <h2>About This Product</h2>
              <ul>
                {product.aboutProduct.map((item, index) => {
                  return <li key={index}>{item.about}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
