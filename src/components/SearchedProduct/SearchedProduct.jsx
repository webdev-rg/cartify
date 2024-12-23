import React, { useEffect, useState } from "react";
import { ProductsData } from "../../ProductsData";
import { useParams } from "react-router-dom";
import { SearchedProductCard } from "./SearchedProductCard";

import "./SearchedProduct.css";

export const SearchedProduct = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);
  console.log(term);

  useEffect(() => {
    console.log("Search term:", term); // Log term
    console.log("ProductsData:", ProductsData); // Log entire dataset
    const filteredData = ProductsData.filter((data) =>
      data.title.toLowerCase().includes(term.toLowerCase())
    );
    console.log("Filtered Data:", filteredData); // Log filtered results
    setFilterData(filteredData);
  }, [term]);

  const handleAddToCart = (
    id,
    title,
    price,
    discount,
    mrp,
    rating,
    brand,
    image
  ) => {
    const cartData = {
      id,
      title,
      price,
      discount,
      mrp,
      rating,
      brand,
      image,
    };
    setCart([...cart, cartData]);
  };

  return (
    <>
      <div className="product-container">
        {filterData.map((data) => {
          return (
            <SearchedProductCard
              key={data.id}
              id={data.id}
              image={data.mainImage}
              title={data.title}
              rating={data.rating}
              mrp={data.MRP()}
              price={data.price}
              discount={data.discount}
              brand={data.brand}
              modelName={data.modelName}
              cartData={handleAddToCart}
            />
          );
        })}
      </div>
    </>
  );
};
