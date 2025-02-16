import axios from "axios";
import { createContext, useState } from "react";

export let cartContext = createContext();

let headers = { token: localStorage.getItem("setToken") };

export function CartContextProvider({ children }) {
  const [number, setnumber] = useState(0);
  function addProduct(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: productId },
        { headers }
      )
      .then(res => res)
      .catch(err => err);
  }
  function getCert() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((res) => {
        setnumber(res.data.numOfCartItems);
        console.log(res.data.numOfCartItems);
        

        return res;
      })
      .catch(err => err);
  }
  function updateCert(productId, newCount) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count: newCount },
        { headers }
      )
      .then(res => res)
      .catch(err => err);
  }
  function deleteCart(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then(res => res)
      .catch(err => err);
  }

  return (
    <cartContext.Provider
      value={{ addProduct, getCert, updateCert, deleteCart, setnumber, number }}
    >
      {children}
    </cartContext.Provider>
  );
}
