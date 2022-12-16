import React, { useEffect, useState } from "react";

import Layout from "containers/layout";
import ProductGrid from "containers/productgrid";
import Card from "components/card";
import { firebaseRequest } from "shared/js";

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    firebaseRequest("products").then((res) => {
      setProductList(res);
    });
  }, []);

  return (
    <Layout>
      <ProductGrid>
        {productList && productList.map((product) => <Card {...product} />)}
      </ProductGrid>
    </Layout>
  );
};

export default App;
