"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Nav from "../../../components/Nav"
import DynamicHero from "../../../components/DynamicHero.jsx"
import alldataWithIds from "../../../components/data"

import { useParams } from "next/navigation";
import products from '../../../components/data';



const ProductDetail = () => {
const params = useParams();
const card = alldataWithIds.find((item) => item.id === parseInt(params.productid));
console.log("card is", card)
console.log("params is", params)
console.log("pid is", params.productid)

  

  return (
    <div>
      <Nav/>
      <DynamicHero card={card}/>
    </div>
  );
};

export default ProductDetail;

// Fetch data based on the productId

