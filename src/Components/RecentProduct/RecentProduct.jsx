import React, { useContext, useEffect, useState } from "react";
import style from "./RecentProduct.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useQuery } from "@tanstack/react-query";
import useProduct from "../../Hooks/useProduct";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { whishContext } from "../../Context/WhishContext";

export default function RecentProduct() {
  let { data, isError, error, isLoading } = useProduct();
  let { addProduct } = useContext(cartContext);
  const [loading, setloading] = useState(false);
  const [heart, setheart] = useState(null)
  const [cartId, setcartId] = useState(0);
  let {getWhish} = useContext(whishContext);

  async function ResentCart(id) {
    setcartId(id);
    setloading(true);
    let res = await addProduct(id);
    console.log(res.data);

    if (res.data.status == "success") {
      toast.success(res.data.message);
      setloading(false);
    } else {
      toast.error(res.data.message);
      setloading(false);
    }
  }

  if (isError) {
    return <h2>{error}</h2>;
  }
  if (isLoading) {
    return <div className="spinner bg-emerald-400"></div>;
  }
  async function addwhish(id){
 let res =   await getWhish(id)
 setheart(`${id}`)
 if (res.data.status == "success") {
  toast.success(res.data.message);
} else {
  toast.error(res.data.message);
}
 

  }

  return (
    <>
      <div className="row">
        {data?.data?.data.map(Product => (
          <div key={Product.id} className=" md:w-1/6 w-1/2 ">
            <div className="product p-3">
              <Link
                to={`ProductDetails/${Product.id}/${Product.category.name}`}
              >
                <img src={Product.imageCover} className=" w-full" alt="" />
                <h3 className="  text-green-600">{Product.category.name}</h3>
                <h3 className="mb-2 font-semibold ">
                  {Product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className=" flex justify-between">
                  <span>{Product.price} EGP</span>
                  <span>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    {Product.ratingsAverage}
                  </span>
                  
                </div>
              </Link>
              <span>
                    <button 
         onClick={()=>addwhish(Product.id)}> <i className={heart == `${Product.id}`? "fa-solid text-red-600 fa-heart text-2xl":"fa-regular text-red-600 fa-heart text-2xl"}></i>   </button>
                  </span>
              <button onClick={() => ResentCart(Product.id)} className=" btn ">
                {loading && cartId == Product.id ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  "add to cart"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
