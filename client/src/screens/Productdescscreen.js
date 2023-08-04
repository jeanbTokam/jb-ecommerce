import React from 'react'

import { useParams } from 'react-router-dom'


export default function Productdescscreen() {

    const products = []
    
    const { id } = useParams();
    const product = products.find((p) => String(p.id) === id);
    console.log(product)
    if (!product) return null
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-2 m-2">
                                <h1>{product.name}</h1>
                                <img src={product.image} className='img-fluid m-3 bigimg' />
                                <p>{product.description}</p>

                    </div>
                    </div>
                      <div className="col-md-6 text-left" >
                            <div className="m-2">
                                      <h1>Price: {product.price}</h1>
                                      <hr/>

                                      {/*implement selection list with react */}
                                      <h1>Select Quantity</h1>
                                          <select>
                                      {[...Array(product.countInStock).keys()].map((val, index)=>{
                                          return  <option value={index+1}>{index+1}</option>
                                      })}
                                     
                                      </select>
                                      <hr/>
                                      <button classname="btn btn-dark">ADD TO CART</button>
                            </div>


                      </div>
        </div>
        </div>
        )}
