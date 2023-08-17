import CheckOut from "./Layout/CheckOut";
import MainPage from "./Layout/MainPage";
import "./sass/app.scss";
import { useState, useEffect } from "react";
import productData from "./productData";

function App() {
  const [product, setProduct] = useState(productData);
  const [basket, setBasket] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const [total, setTotal] = useState(0);

  const delFromBasket = (data) => {
    const newBasket = basket.filter((bs) => data.id != bs.id)
    setBasket(newBasket)
    setTotal(total - data.price)
    let index = product.map(e => e.id).indexOf(data.id)
    let updatedProduct = product;
    updatedProduct[index].active = true
    setProduct(updatedProduct)
  }

  return (
    <div className="App">
      {checkout ? (
        <CheckOut
          basket={basket}
          setBasket={setBasket}
          setCheckout={setCheckout}
          total={total}
          set={setTotal}
          delFromBasket={delFromBasket}
        />
      ) : (
        <MainPage
          basket={basket}
          setBasket={setBasket}
          product={product}
          setProduct={setProduct}
          setCheckout={setCheckout}
          total={total}
          setTotal={setTotal}
          delFromBasket={delFromBasket}
        />
      )}
    </div>
  );
}

export default App;
