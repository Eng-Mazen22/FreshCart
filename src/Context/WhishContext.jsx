import axios from "axios";
import { createContext, useState } from "react";
import React from "react";

export let whishContext = createContext();

export default function WhishListProvider({ children }) {
  let headers = { token: localStorage.getItem("setToken") };
  function getWhish(productId) {
   return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId: productId },
        { headers }
      )
      .then(res => res)
      .catch(err => err);
  }
  function getAllwhish(){
  return  axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers}).then(res=>res).catch(err=>err)
  }

  function deleteWhish(productId){
   return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{headers}).then(res=>res).catch(err=>err)
  }

  return <whishContext.Provider value={{ getWhish , getAllwhish  , deleteWhish}}>{children}</whishContext.Provider>
  
}
