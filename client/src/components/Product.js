import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

export default function Product({ product }) {
    return (
        <div className="col-md-3 m-3 card p-2 text-left">
            <div >
                <Link to={`product/${product.id}`}>
                    <img src={product.image} className='img-fluid' />
                    <h1>{product.name}</h1>
                    <Rating
                        initialRating={product.rating}
                        stop={6}
                        emptySymbol={['fa fa-star-o fa-1x low', 'fa fa-star-o fa-1x low',
                            'fa fa-star-o fa-1x medium', 'fa fa-star-o fa-1x medium',
                            'fa fa-star-o fa-1x high', 'fa fa-star-o fa-1x high']}
                        fullSymbol={['fa fa-star fa-1x low', 'fa fa-star fa-1x low',
                            'fa fa-star fa-1x medium', 'fa fa-star fa-1x medium',
                            'fa fa-star fa-1x high', 'fa fa-star fa-1x high']}
                        readonly={true}
                    />
                    <h1>Price :{product.price}</h1>
                </Link>
            </div>
        </div>
    )
}
