import React, { useState } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

import GridFormat from "../../assets/icon/format-grid.svg";
import ListFormat from "../../assets/icon/format-list.svg";

const ProductGrid = () => {
  const [toShow, setToShow] = useState("9");
  const handleToShow = (e) => {
    setToShow(e.target.value);
  };

  const [currentFormat, setCurrentFormat] = useState(GridFormat);
  const handleFormatToggle = () => {
    setCurrentFormat(currentFormat === GridFormat ? ListFormat : GridFormat);
  };

  return (
    <div className="grid-container">
      <div className="grid-settings body-medium">
        <div className="grid-format">
          <button onClick={handleFormatToggle}>
            <img src={currentFormat} />
          </button>
          <p className="body-medium-he">Showing * - * of * items</p>
        </div>
        <div className="sorting-options">
          <div className="to-show">
            <p className="body-medium-he">To show:</p>
            <input
              type="number"
              value={toShow}
              onChange={handleToShow}
              className="body-medium text-low-emphasis"
            />
          </div>
          <div className="sort-by">
            <p className="body-medium-he">Sort by</p>
            <select id="sort-by-options" className="body-medium-he">
              <option value="Position">Position</option>
              <option value="Best reviews">Best reviews</option>
              <option value="Most sold">Most sold</option>
              <option value="Lowest price">Lowest price</option>
              <option value="Highest price">Highest price</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="product-placeholder">
          <span>product placeholder</span>
        </div>
        <div className="product-placeholder">
          <span>product placeholder</span>
        </div>
        <div className="product-placeholder">
          <span>product placeholder</span>
        </div>
        <div className="product-placeholder">
          <span>product placeholder</span>
        </div>
        <div className="product-placeholder">
          <span>product placeholder</span>
        </div>
        <div className="product-placeholder">
          <span>product placeholder</span>
        </div>
        <div className="product-placeholder">
          <span>product placeholder</span>
        </div>
        <div className="product-placeholder">
          <span>product placeholder</span>
        </div>
        <div className="product-placeholder">
          <span>product placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
