import React, { useContext, useEffect, useState } from 'react'
import { whishContext } from '../../Context/WhishContext';
import toast from 'react-hot-toast';

export default function WishList() {
  let {getAllwhish ,deleteWhish} = useContext(whishContext)
const [whishList, setwhishList] = useState(null)


async function getWhishItem(){
 let res = await getAllwhish()
 console.log(res.data.data);
 setwhishList(res.data.data)
}
async function deleteItem(productId){
  let res = await deleteWhish(productId)
  if (res.data.status == "success") {
    setwhishList(res.data.data)
    toast.success(res.data.message);
  } else {
    toast.error(res.data.message);
  }
  
}
useEffect(()=>{
  getWhishItem()
},[])

  return (
   <>
    <div className=" ">
            <div>
              <h1 className=" text-2xl border-b-4">WishList</h1>
            </div>
           
          </div>
          <div className="row  flex-col ">
            
          {whishList?.length > 0 ? whishList?.map(product => (
              <div key={product.id}>
                <div className=" flex mb-4 justify-between   gap-4  border-b-2 ">
                  <div className=" flex ">
                    <img
                      className="w-[170px] align-items-center"
                      src={product.imageCover}
                      alt="yes"
                    />
                    <div className=" flex justify-center ml-5 items-center  flex-col  gap-5">
                      <h2>{product.title}</h2>
                      <h2 className="text-emerald-500 ">
                        {product.price}EGP
                      </h2>
                      <h2
                        onClick={() => deleteItem(product.id)}
                        className=" text-black  hover:text-red-600 cursor-pointer"
                      >
                        {" "}
                        <i className="fa-solid fa-trash mr-2 text-emerald-500" />
                        Remove
                      </h2>
                    </div>
                  </div>

                  <div className="col-4 flex items-center  gap-3 ">
                    
                  <button className='btn'>add products</button>
                  </div>
                </div>
              </div>
            )): <h1 className=' text-emerald-300 text-center'>empty Whish List</h1>}
          </div>

   </>
  )
}
