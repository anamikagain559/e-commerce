import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortCriteria, setSortCriteria] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://e-commerce-delta-cyan-39.vercel.app/products', {
          params: {
            searchTerm,
            brand,
            category,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            sort: sortCriteria,
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        setFilteredProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [searchTerm, brand, category, priceRange, sortCriteria, currentPage, itemsPerPage]);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Product List</h1>

      <div>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">All Brands</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
          {/* Add more brands as needed */}
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          {/* Add more categories as needed */}
        </select>

        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
        />
        <span>Price Range: {priceRange[0]} - {priceRange[1]}</span>
      </div>

      <div>
        <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="dateAdded">Date Added: Newest First</option>
        </select>
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.brand} - {product.category} - ${product.price} - {product.dateAdded}
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={number === currentPage ? 'active' : ''}
          >
            {number + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
