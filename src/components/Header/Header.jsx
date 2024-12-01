import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";

import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { useRef, useState } from "react";

export const Header = () => {
  const [searchForm, setSearchForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleOpenSearchForm = () => {
    setSearchForm(true);
    inputRef.current.focus();
  };

  const handleCloseSearchForm = () => {
    setSearchForm(false);
    inputRef.current.value = "";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    handleCloseSearchForm();
  }

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="search-cart">
          <div className="search-btn">
            <button onClick={handleOpenSearchForm}>
              <BiSearch />
            </button>
          </div>
          <div className="cart-btn">
            <button>
              <Link to={"/cart"}>
                <BsCart4 />
              </Link>
            </button>
          </div>
        </div>

        <div className={`${searchForm ? "search-form active" : "search-form"}`}>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="search-product">
              <BiSearch />
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              name="search-product"
              id="search-product"
              placeholder="Search Products..."
              ref={inputRef}
            />
          </form>
          <div className="close-search-form">
            <button onClick={handleCloseSearchForm}>
              <LiaTimesSolid />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
