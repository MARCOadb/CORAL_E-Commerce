import React, { useEffect, useState } from "react";
import useBreakpoint from "../../hooks/useBreakPoint";

import "./style.scss";

import GridIcon from "../../assets/icon/format-grid.svg";
import ListIcon from "../../assets/icon/format-list.svg";

import getAllProducts from "../../services/getAllProducts";
import Product from "../product";

const ProductGrid = ({ categoryId, productConfig }) => {
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

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    const produtos = await getAllProducts();
    return produtos;
  };

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

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
                    Showing * - * of{" "}
                    {products?.reduce((acc, cur) => {
                      if (cur.categoryId === categoryId) acc++;

                      return acc;
                    }, 0)}{" "}
                    items
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
                    {!loading &&
                      products?.map((item) => {
                        if (item.data?.categoryId && categoryId?.id && item.data?.categoryId === categoryId.id.toString())
                          return (
                            <Product largura={286} altura={286} label data={item.data} key={item.uid} itemId={item.uid} sort={gridClass === "list" && true} button={gridClass === "list" && true} />
                          );
                        else return console.log("Não tem produtos");
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
                {products?.reduce((acc, cur) => {
                  if (cur.categoryId === categoryId) acc++;
                  return acc;
                }, 0)}
                {` Product(s)`}
              </p>
              <div className="grid-mobile">
                <>
                  {!loading &&
                    products?.map((item) => {
                      if (item.data?.categoryId && categoryId?.id && item.data?.categoryId === categoryId.id.toString())
                        return <Product altura={false} largura={false} data={item.data} key={item.uid} itemId={item.uid} productConfig={productConfig} sort={gridClass === "list" && true} />;
                      else return console.log("Não tem produtos");
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
