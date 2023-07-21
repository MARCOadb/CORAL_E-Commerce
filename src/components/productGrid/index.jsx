import React, { useState } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

import GridIcon from "../../assets/icon/format-grid.svg";
import ListIcon from "../../assets/icon/format-list.svg";

const ProductGrid = () => {
  const { phone, desktop } = useBreakpoint();

  const [toShow, setToShow] = useState("9");
  const handleToShow = (e) => {
    setToShow(e.target.value);
  };

  const [currentFormat, setCurrentFormat] = useState(GridIcon);
  const [gridClass, setGridClass] = useState("grid");
  const handleFormatToggle = () => {
    setCurrentFormat(currentFormat === GridIcon ? ListIcon : GridIcon);
    setGridClass(gridClass === "grid" ? "list" : "grid");
  };

  return (
    <>
      <div>
        {desktop ? (
          <>
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
              <div className={gridClass}>
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
          </>
        ) : (
          <>
            <div className="container-grid-mobile">
              <p className="title-regular text-low-emphasis">*** Products</p>
              <div className="grid-mobile">
                <div className="product-placeholder">
                  <p>product placeholder</p>
                </div>
                <div className="product-placeholder">
                  <p>product placeholder</p>
                </div>
                <div className="product-placeholder">
                  <p>product placeholder</p>
                </div>
                <div className="product-placeholder">
                  <p>product placeholder</p>
                </div>
                <div className="product-placeholder">
                  <p>product placeholder</p>
                </div>
                <div className="product-placeholder">
                  <p>product placeholder</p>
                </div>
                <div className="product-placeholder">
                  <p>product placeholder</p>
                </div>
                <div className="product-placeholder">
                  <p>product placeholder</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
