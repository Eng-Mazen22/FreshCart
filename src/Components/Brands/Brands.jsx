import React, { useEffect, useState } from 'react'
import style from "./Brands.module.css"
import axios from 'axios'

export default function Brands() {
  const [brand, setbrand] = useState([])
  function getBrands(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/brands`).then((res)=>{console.log(res.data.data);
      setbrand(res.data.data)
    }).catch((err)=>{console.log(err);
    })
  }
  useEffect(()=>{
    getBrands()
  },[])
  return (
    <>
    <div className="row  ">
        {brand.length >0 ?  brand.map(Product => (
          <div className="w-1/3 ">
            <div
              key={Product.id}
              class="max-w-sm bg-white border my-3 border-gray-200 rounded-lg  hover:shadow-lg hover:shadow-emerald-500 dark:border-gray-700"
            >
              <div>
                <img class="rounded-t-lg w-full h-[300px]  " src={Product.image} alt="" />
              </div>
              <div class="p-2">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-center  text-emerald-500">
                  {Product.name}
                </h5>
              </div>
            </div>
          </div>
        )) : <div className="spinner bg-emerald-400"></div> }
      </div>
    
    </>
  )
}
