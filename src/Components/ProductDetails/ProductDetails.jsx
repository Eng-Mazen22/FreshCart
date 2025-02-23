import React, { useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";

export default function ProductDetails() {
  const [ProductDetails, setProductDetails] = useState(null);
  const [relateProducts, setrelateProducts] = useState([]);
  let { id, category } = useParams();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  function getProduct(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(res => {
        console.log(res.data.data);
        setProductDetails(res.data.data);
      })
      .catch(res => {
        console.log(res);
      });
  }

  function getAllProducts() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then(res => {
      let relate = res.data.data.filter(
        ProductDetails => ProductDetails.category.name == category
      );
      setrelateProducts(relate);
    });
  }
  useEffect(() => {
    getProduct(id);
    getAllProducts();
  }, [id, category]);

  return (
    <>
      <div className="row items-center">
      
        <div className="w-1/4">
        <Slider {...settings}>
        {ProductDetails?.images.map((src)=><img src={src} className=" w-full"></img>)}
           </Slider> 
          
       

        
        </div>
        <div className="w-3/4 p-5">
          <h3 className="font-semibold capitalize text-2xl">
            {ProductDetails?.title}
          </h3>
          <h3 className=" text-gray-600 my-8">{ProductDetails?.description}</h3>
          <h3 className=" text-gray-600 my-8 font-bold">
            {ProductDetails?.category.name}
          </h3>

          <div className=" flex justify-between">
            <span>{ProductDetails?.price} EGP</span>
            <span>
              <i className="fa-solid fa-star text-yellow-400"></i>
              {ProductDetails?.ratingsAverage}
            </span>
          </div>
          <button className=" btn ">Add to Cart</button>
        </div>
      </div>
      <div className="row">
        {relateProducts.length > 0 ? (
          relateProducts.map(Product => (
            <div key={Product.id} className=" w-1/6">
              <div className="product p-3">
                <Link
                  to={`/FreshCart/ProductDetails/${Product.id}/${Product.category.name}`}
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
                <button className=" btn ">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <div className="spinner bg-emerald-400"></div>
        )}
      </div>
    </>
  );
}
