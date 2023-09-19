import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { faker } from "@faker-js/faker";

faker.seed(123);

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Generate an array of products with specific properties
    const newProducts = Array.from({ length: 20 }, () => ({
      id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      stock: faker.datatype.number(100), // Change 100 to your desired maximum stock
      image: faker.image.imageUrl(),
    }));

    setProducts(newProducts);
  }, []);
  console.log(products);

  return (
    <div className="container">
      {products
        ? products.map((product) => {
            return <SingleProduct key={product.id} product={product} />;
          })
        : "Loading.../"}
    </div>
  );
}

export default Home;
