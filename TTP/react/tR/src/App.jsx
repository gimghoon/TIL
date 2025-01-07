import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const PROUDCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
function App() {
  const FilterableProductTable = ({ products }) => {
    const [searchtext, setSearchtext] = useState("");
    const [isStocked, setIsStocked] = useState(false);
    return (
      <>
        <SearchBar
          setSearchtext={setSearchtext}
          setIsStocked={setIsStocked}
          searchtext={searchtext}
          isStocked={isStocked}
        />
        <ProductTable
          isStocked={isStocked}
          searchtext={searchtext}
          products={products}
        />
      </>
    );
  };
  const ProductCategoryRow = ({ category }) => {
    return (
      <>
        <ul>{category}</ul>
      </>
    );
  };
  const ProductRow = ({ product }) => {
    return (
      <>
        <li style={{ color: product.stocked ? "yellow" : "red" }}>
          {product.name}
          <span>{product.price}</span>
        </li>
      </>
    );
  };
  const ProductTable = ({ products, isStocked, searchtext }) => {
    let lastProduct = null;
    const row = [];
    products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(searchtext.toLowerCase()) === -1)
        return;
      if (isStocked && !product.stocked) return;
      if (lastProduct !== product.category) {
        row.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }
      row.push(
        <ProductRow
          isStocked={isStocked}
          key={product.name}
          product={product}
        />
      );

      lastProduct = product.category;
    });

    return <>{row}</>;
  };
  const SearchBar = ({
    searchtext,
    isStocked,
    setSearchtext,
    setIsStocked,
  }) => {
    return (
      <>
        <input
          type="text"
          placeholder="Search..."
          value={searchtext}
          onChange={(e) => setSearchtext(e.target.value)}
        />
        <br />
        <input
          id="stockProductCheckbox"
          type="checkbox"
          name="Only show products in stock"
          checked={isStocked}
          onChange={(e) => setIsStocked(e.target.checked)}
        ></input>

        <span>Only show products in stock</span>
      </>
    );
  };

  return (
    <>
      <FilterableProductTable products={PROUDCTS} />
    </>
  );
}

export default App;
