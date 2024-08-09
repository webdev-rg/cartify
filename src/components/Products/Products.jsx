import React, { useEffect, useState } from "react";
import "./Product.css";

import allProducts from "../../assets/images/all-products.png";
import mobiles from "../../assets/images/mobiles.png";
import watches from "../../assets/images/watches.png";
import tabs from "../../assets/images/tabs.png";
import laptops from "../../assets/images/laptops.png";
import furniture from "../../assets/images/furniture.png";
import tv from "../../assets/images/tv.png";
import { ProductCard } from "./ProductCard";

export const Products = ({ items, cart, setCart }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(items);
      // setData(items);
    } else {
      const filtered = items.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredItems(filtered);
      // setData(filtered)
    }
  }, [items, selectedCategory]);

  const categories = [
    {
      id: 1,
      name: "All",
      image: allProducts, // Placeholder or a common image for 'All'
    },
    {
      id: 2,
      name: "Mobiles",
      image: mobiles,
    },
    {
      id: 3,
      name: "Watches",
      image: watches,
    },
    {
      id: 4,
      name: "Tabs",
      image: tabs,
    },
    {
      id: 5,
      name: "Laptops",
      image: laptops,
    },
    {
      id: 6,
      name: "Furniture",
      image: furniture,
    },
    {
      id: 7,
      name: "TV",
      image: tv,
    },
  ];

  const handleFilterByCategory = (category) => {
    setSelectedCategory(category);
    console.log(`Selected category: ${category}`);
  };

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
      <section className="products-section">
        <div className="category-container">
          {categories.map((item) => {
            return (
              <CategoryCard
                key={item.id}
                image={item.image}
                categoryName={item.name}
                filterCategory={handleFilterByCategory}
              />
            );
          })}
        </div>

        <div className="products-container">
          {filteredItems.map((data) => {
            return (
              <ProductCard
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
      </section>
    </>
  );
};

const CategoryCard = ({ image, categoryName, filterCategory }) => {
  return (
    <>
      <div className="category" onClick={() => filterCategory(categoryName)}>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <h2>{categoryName}</h2>
      </div>
    </>
  );
};
