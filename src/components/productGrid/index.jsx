import React, { useContext, useEffect, useMemo, useState } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

import GridIcon from "../../assets/icon/format-grid.svg";
import ListIcon from "../../assets/icon/format-list.svg";

import getAllProducts from "../../services/getAllProducts";
import Product from "../product";
import { BagContext } from "../../contexts/BagContext";
import BottomModal from "../bottomModal";

const ProductGrid = ({ filterConfig, categoryId, productConfig }) => {
  const { allProducts } = useContext(BagContext);
  const { phone, desktop } = useBreakpoint();
  const [toShow, setToShow] = useState(9);
  const handleToShow = (e) => {
    setToShow(e.target.value);
  };
  const [sort, setSort] = useState(null);
  const handleSelect = (e) => {
    setSort(e.target.value);
  };

  const produtosFiltrados = useMemo(() => {
    if (allProducts?.length > 0 && categoryId?.id) {
      const filtrados = allProducts
        ?.filter(
          (item) =>
            (!categoryId.id || item.data.categoryId == categoryId.id) &&
            (!filterConfig.selectedColor || item.data.color === filterConfig.selectedColor) &&
            (!filterConfig.selectedBrand || item.data.brand === filterConfig.selectedBrand) &&
            (!filterConfig.selectedPrice || item.data.price <= filterConfig.selectedPrice)
        )
        .filter((item, index) => !desktop || index < toShow);
      if ((sort || filterConfig.sort) === "Lowest price") filtrados.sort((a, b) => a.data.price - b.data.price);
      else if ((sort || filterConfig.sort) === "Highest price") filtrados.sort((a, b) => b.data.price - a.data.price);
      return filtrados;
    } else return console.log("Allproducts ta vazio");
  }, [filterConfig, allProducts, toShow, sort]);

  const [currentFormat, setCurrentFormat] = useState(GridIcon);
  const [gridClass, setGridClass] = useState("grid");
  const handleFormatToggle = () => {
    setCurrentFormat(currentFormat === GridIcon ? ListIcon : GridIcon);
    setGridClass(gridClass === "grid" ? "list" : "grid");
  };

  const [productsAmount, setProductsAmount] = useState(0);

  useEffect(() => {
    if (!!allProducts) {
      const result = allProducts.filter((product) => product.data.categoryId == categoryId?.id);
      setProductsAmount(result.length);
    }
  }, [allProducts]);

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
                  <p className="body-medium-he">
                    Showing {produtosFiltrados?.length} of {toShow} items
                  </p>
                </div>
                <div className="sorting-options">
                  <div className="to-show">
                    <p className="body-medium-he">To show:</p>
                    <input type="number" value={toShow} onChange={handleToShow} className="body-medium text-low-emphasis" />
                  </div>
                  <div className="sort-by">
                    <p className="body-medium-he">Sort by</p>
                    <select id="sort-by-options" className="body-medium-he" onChange={handleSelect}>
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
                <>
                  <>
                    {produtosFiltrados?.map((item, index) => (
                      <Product
                        largura={286}
                        altura={286}
                        ratings
                        discount={50}
                        oldprice={item.data?.price * 2}
                        label
                        data={item.data}
                        key={item.uid}
                        itemId={item.uid}
                        sort={gridClass === "list" && true}
                        button={gridClass === "list" && true}
                      />
                    ))}
                  </>
                </>
              </div>
            </div>
          </>
        ) : (
          <>
            <BottomModal></BottomModal>
            <div className="container-grid-mobile">
              <p className="title-regular text-low-emphasis">
                {produtosFiltrados?.length}
                {" Product(s)"}
              </p>
              <div className="grid-mobile">
                <>
                  {produtosFiltrados?.map((item) => {
                    return (
                      <Product
                        largura={false}
                        altura={false}
                        data={item.data}
                        discount={50}
                        oldprice={item.data?.price * 2}
                        key={item.uid}
                        itemId={item.uid}
                        productConfig={productConfig}
                        button
                        sort={gridClass === "list" && true}
                      />
                    );
                  })}
                </>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
