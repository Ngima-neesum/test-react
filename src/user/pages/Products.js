import { Typography } from "@mui/material";
import React from "react";
import { useGetProducts } from "../hooks/api/useProduct";

const Products = () => {
  const { data } = useGetProducts();
  return (
    <div>
      <Typography variant="h4">Products</Typography>
      {data?.map((product) => (
        <div
          key={product?.id}
          style={{
            margin: 20,
            border: "1px solid black",
          }}>
          <Typography>Name: {product?.name}</Typography>
          <Typography>Category: {product?.category?.name}</Typography>
          <Typography>Price: {product?.price}</Typography>
          <Typography>Stock: {product?.stock}</Typography>
          <Typography>
            image url: {product?.images && product?.images[0].url}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Products;
