import React from 'react';
import { BsFillCartPlusFill} from "react-icons/bs";
import './Product.css'
const Product = (props) => {
    const {handleAddtoCart,product}=props
    const {name,img,price,seller,ratings}=product
  
    // console.log(props.product)
// console.log(props);
   
    return (
        <div className='w-[250px] h-[450px] lg:w-[300px] lg:h-[510px] border-[1px] rounded-lg border-border-color-cart relative'>
            <img className='w-[220px] lg:w-[286px] rounded-lg h-auto m-[15px] lg:m-2' src={img} alt='Product'></img>
            <div className="product-info sm:mx-8 my-0 lg:mx-4">
            <p className='product-name lg:text-xl text-sm'>{name}</p>
            <p><small>Price:${price}</small></p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>

            </div>
            <button onClick={()=>handleAddtoCart(product)} className='absolute flex align-center justify-center border rounded-bl-lg bottom-0 py-2 bg-[#FFE0B3] w-full hover:bg-[orange] cursor-pointer'>
                <p className='text-lg'>Add to cart</p><BsFillCartPlusFill className='ml-2 mt-1 text-lg'></BsFillCartPlusFill>
                
            </button>
        </div>
    );
};

export default Product;