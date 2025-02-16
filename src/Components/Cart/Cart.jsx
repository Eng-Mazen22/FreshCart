import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Cart() {
  let { getCert, updateCert, deleteCart } = useContext(cartContext);
  const [cartDetails, setcartDetails] = useState(null);
  const [loading, setloading] = useState(false);

  async function getAllCart() {
    let res = await getCert();
    console.log(res);

    if (res.data.status == "success") {
      setcartDetails(res.data.data);
    } else {
      console.log("errrrrrrrr");
    }
  }
  async function updateAllCart(id, count) {
    let c = await updateCert(id, count);
    setloading(true);

    if (c.data.status == "success") {
      setcartDetails(c.data.data);
      toast.success("product successful");
      setloading(false);

      console.log(c.data.data);
    } else {
      console.log("errrrrrrrr");
      toast.error("errorrrrrr");
      setloading(false);
    }
  }
  async function deleteCart2(productId) {
    let t = await deleteCart(productId);
    if (t.data.status == "success") {
      setcartDetails(t.data.data);
      toast.success("success");
    } else {
      console.log("errrrrrrrr");
      toast.error("error");
    }
  }

  useEffect(() => {
    getAllCart();
  }, []);

  return (
    <>
      {cartDetails?.products.length > 0 ? (
        <>
          <div className=" ">
            <div>
              <h1 className=" text-2xl">My Cart</h1>
            </div>
            <div>
              <h1 className=" text-xl border-b-2 ">
                Total Cart Price :
                <span className=" text-emerald-400">
                  {cartDetails.totalCartPrice}
                  EGP
                </span>
              </h1>
            </div>
          </div>
          <div className="row  flex-col ">
            {cartDetails?.products.map(product => (
              <div key={product.product.id}>
                <div className=" flex mb-4 justify-between   gap-4  border-b-2 ">
                  <div className=" flex ">
                    <img
                      className="w-[170px] align-items-center"
                      src={product.product.imageCover}
                      alt="yes"
                    />
                    <div className=" flex justify-center ml-5 items-center  flex-col  gap-5">
                      <h2>{product.product.title}</h2>
                      <h2 className="text-emerald-500 ">
                        {product.price * product.count}EGP
                      </h2>
                      <h2
                        onClick={() => deleteCart2(product.product.id)}
                        className=" text-black  hover:text-red-600 cursor-pointer"
                      >
                        {" "}
                        <i className="fa-solid fa-trash mr-2 text-emerald-500" />
                        Remove
                      </h2>
                    </div>
                  </div>

                  <div className="col-4 flex items-center  gap-3 ">
                    <div>
                      <button
                        onClick={() =>
                          updateAllCart(product.product.id, product.count - 1)
                        }
                      >
                        {" "}
                        <i className="fa-regular fa-square-minus fa-2xl   text-emerald-500 cursor-pointer" />
                      </button>
                    </div>
                    <div className=" ">{product.count}</div>
                    <div>
                      <button
                        onClick={() =>
                          updateAllCart(product.product.id, product.count + 1)
                        }
                      >
                        {" "}
                        <i className="fa-regular fa-square-plus fa-2xl text-emerald-500 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
                <Link to={"/checkOut"}>          <div><button className="btn">check</button></div>
                </Link>
        </>
      ) : (
        <h2 className=" text-xl text-center">Empty cart 👍</h2>
      )}
    </>
  );
}
