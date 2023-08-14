import React, { useContext, useEffect, useState } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

import GridIcon from "../../assets/icon/format-grid.svg";
import ListIcon from "../../assets/icon/format-list.svg";

import getAllProducts from "../../services/getAllProducts";
import Product from "../product";
import { BagContext } from "../../contexts/BagContext";

const ProductGrid = ({ filterConfig, categoryId, productConfig }) => {
  const { phone, desktop } = useBreakpoint();
  const { allProducts } = useContext(BagContext);
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
                    Showing {productsAmount} of {productsAmount} items
                  </p>
                  {/* PRODUCTS.LENGTH IRA MOSTRAR TODOS OS PRODUTOS, NAO SOMENTE OS DA CATEGORIA */}
                </div>
                <div className="sorting-options">
                  <div className="to-show">
                    <p className="body-medium-he">To show:</p>
                    <input type="number" value={toShow} onChange={handleToShow} className="body-medium text-low-emphasis" />
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
                <>
                  <>
                    {allProducts?.map((item) => {
                      if (item.data?.categoryId && categoryId?.id && item.data?.categoryId === categoryId.id.toString())
                        return (
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
                        );
                    })}
                  </>
                </>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container-grid-mobile">
              <p className="title-regular text-low-emphasis">
                {productsAmount}
                {" Product(s)"}
              </p>
              <div className="grid-mobile">
                <>
                  {allProducts?.map((item) => {
                    if (item.data?.categoryId && categoryId?.id && item.data?.categoryId === categoryId.id.toString())
                      return (
                        <Product
                          altura={156}
                          largura={150}
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
