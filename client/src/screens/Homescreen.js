import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Product from '../components/Product'



export default function Homescreen() {
    const [products, setProducts] =useState([])


   
useEffect(()=>{  
    axios.get('/api/products/getallproducts')
    .then(res=>{
        console.log('response', res);
        setProducts(res.data)
    }
    )
    .catch(err=>{
        console.log(err)
    }
    )

},[])





    return (
        <div>
            <div className="row justify-content-center">

                {products.length && (products.map(product=>{

                  return  <div key={product._id}>
                    <Product product={product} />
                  </div>
                }))}

            </div>
        </div>

    )
}
