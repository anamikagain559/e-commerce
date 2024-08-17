import React, { useEffect, useState } from "react";
import { deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
const categories = [
  "Home Decor",
  "Outdoor",
  "Electronics",
  "Smart Home",
  "Computers",
  "Kitchen",
  "Personal Care",
  "Security",
  "Home Appliances",
  "Clothing",
];
const brands = [
  "SoundMax",
  "EcoWear",
  "HydroFit",
  "ComfortPlus",
  "SmileBright",
  "VisionTech",
  "FlexFit",
  "ChargeFast",
  "SteadyShot",
  "GameMaster",
  "CookEase",
  "HotBrew",
  "FitTrack",
  "BrewMaster",
  "QuietComfort",
  "HomeLink",
  "BassBoom",
  "CrispyFry",
  "BrightHue",
];
const Shop = () => {
  const [products, setProducts] = useState([]);
  const cart = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortCriteria, setSortCriteria] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch("http://localhost:5000/productsCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    let results = [...products];

    if (searchTerm) {
      results = results.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (brand) {
      results = results.filter((product) => product.brand === brand);
    }

    if (category) {
      results = results.filter((product) => product.category === category);
    }

    if (priceRange) {
      results = results.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    }

    if (sortCriteria === "priceAsc") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === "priceDesc") {
      results.sort((a, b) => b.price - a.price);
    } else if (sortCriteria === "dateAdded") {
      results.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    setFilteredProducts(results);
  }, [products, searchTerm, brand, category, priceRange, sortCriteria]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    if (selectedCategory === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="  text-center pt-5">
       
         <div className="select-wrapper">
         <input
          type="text"
          placeholder="Search products"
          className="input input-bordered w-full max-w-xs pr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
          <br />

          <select
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">Sort By</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="dateAdded">Date Added: Newest First</option>
          </select>
          <span className="dropdown-arrow"></span>
        
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">All Brands</option>
          {brands.map((brandName) => (
            <option key={brandName} value={brandName}>
              {brandName}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

       
        <br />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
        />
        <span>
          Price Range: {priceRange[0]} - {priceRange[1]}
        </span>
      </div>
      </div>
      <div className="shop-container">
        <div className="products-container flex-wrap mx-auto my-20">
          {filteredProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <p>Current page: {currentPage}</p>
        <button onClick={handlePrevPage}>Prev</button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? "selected" : undefined}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
        <select value={itemsPerPage} onChange={handleItemsPerPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </>
  );
};

export default Shop;
