import React from 'react';
import { MdDelete } from "react-icons/md";
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props
    const { name, img, price, shipping, quantity } = product
    return (
        <div className='border-2 my-2 flex'>
            <div className='w-1/4'>
                <img className='' src={img} alt="img" />
            </div>

            <div className="review-detail-container flex justify-between w-full">
                <div className="mx-12 reviewDetails">
                    <p title={name}>name:{name.length > 20 ? name.slice(0, 15) + '...' : name}</p>
                    <p>Price: <span>{price}</span></p>
                    <p><small>shipping:{shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete-container ml-20 my-10 mx-6">
                    <button className='rounded-full bg-orange-400 text-white w-24 h-6 text-lg ' onClick={() => handleRemoveProduct(product)}> <MdDelete className='mx-auto'></MdDelete></button>

                </div>
            </div>

        </div>
    );
};

export default ReviewItem;