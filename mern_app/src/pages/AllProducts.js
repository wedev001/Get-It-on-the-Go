import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'

const AllProducts = () => {
  const [openUploadProduct,setOpenUplaodProduct] = useState(false)
  const [allProduct,setAllProduct] = useState([])

  const fetchAllProduct = async() =>{
 const response = await fetch(SummaryApi.allProduct.url)
const dataResponse = await response.json()

console.log("Data Response",dataResponse);


  setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllProduct()
  },[])
  return (
    <div>
    <div className='bg-white py-2 px-4 flex justify-between items-center'>
      <h2 className='font-bold text-lg '>All Products</h2>
      <button className='border border-custom-50 hover:bg-custom-50 hover:text-white py-2 px-3 rounded-full transition-all' onClick={()=>setOpenUplaodProduct(true)}>Upload Product</button>
    </div>

    <div className='flex items-center flex-wrap gap-5  py-4 px-4 h-[calc(100vh-190px)] overflow-y-scroll'>
        {
          allProduct.map((product,index)=>{
            return (
              <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
            )
          })
        }
    </div>

    {
      openUploadProduct && (
            <UploadProduct onClose={()=>setOpenUplaodProduct(false)} fetchdata={fetchAllProduct}/>
      )
    }
  
    </div>
  )
}

export default AllProducts