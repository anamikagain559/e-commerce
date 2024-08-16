import React, { useState, useEffect } from 'react';

// Sample product data
const sampleProducts = [
  { id: 1, name: 'Product 1', brand: 'Brand A', category: 'Category A', price: 50, dateAdded: '2023-01-01' },
  { id: 2, name: 'Product 2', brand: 'Brand B', category: 'Category B', price: 150, dateAdded: '2023-01-10' },
  // Add more sample products as needed
  { id: 3, name: 'Product 3', brand: 'Brand A', category: 'Category A', price: 70, dateAdded: '2023-01-15' },
  { id: 4, name: 'Product 4', brand: 'Brand B', category: 'Category B', price: 200, dateAdded: '2023-01-20' },
  { id: 5, name: 'Product 5', brand: 'Brand A', category: 'Category A', price: 80, dateAdded: '2023-01-25' },
  { id: 6, name: 'Product 6', brand: 'Brand B', category: 'Category B', price: 300, dateAdded: '2023-01-30' },
  { id: 7, name: 'Product 7', brand: 'Brand A', category: 'Category A', price: 90, dateAdded: '2023-02-01' },
  { id: 8, name: 'Product 8', brand: 'Brand B', category: 'Category B', price: 400, dateAdded: '2023-02-10' },
  { id: 9, name: 'Product 9', brand: 'Brand A', category: 'Category A', price: 100, dateAdded: '2023-02-15' },
  { id: 10, name: 'Product 10', brand: 'Brand B', category: 'Category B', price: 500, dateAdded: '2023-02-20' },
  { id: 11, name: 'Product 11', brand: 'Brand A', category: 'Category A', price: 110, dateAdded: '2023-02-25' },
  { id: 12, name: 'Product 12', brand: 'Brand B', category: 'Category B', price: 600, dateAdded: '2023-03-01' }
];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortCriteria, setSortCriteria] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    let results = sampleProducts;

    if (searchTerm) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (brand) {
      results = results.filter(product => product.brand === brand);
    }

    if (category) {
      results = results.filter(product => product.category === category);
    }

    if (priceRange) {
      results = results.filter(product =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    }

    if (sortCriteria === 'priceAsc') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === 'priceDesc') {
      results.sort((a, b) => b.price - a.price);
    } else if (sortCriteria === 'dateAdded') {
      results.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    setFilteredProducts(results);
  }, [searchTerm, brand, category, priceRange, sortCriteria]);

  // Get current products
  const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Product List</h1>

      <div>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <select value={brand} onChange={e => setBrand(e.target.value)}>
          <option value="">All Brands</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
          {/* Add more brands as needed */}
        </select>

        <select value={category} onChange={e => setCategory(e.target.value)}>
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
          onChange={e => setPriceRange([0, e.target.value])}
        />
        <span>Price Range: {priceRange[0]} - {priceRange[1]}</span>
      </div>

      <div>
        <select value={sortCriteria} onChange={e => setSortCriteria(e.target.value)}>
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="dateAdded">Date Added: Newest First</option>
        </select>
      </div>

      <ul>
        {currentProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.brand} - {product.category} - ${product.price} - {product.dateAdded}
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        {[...Array(totalPages).keys()].map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={number === currentPage ? 'active' : ''}
          >
            {number + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
