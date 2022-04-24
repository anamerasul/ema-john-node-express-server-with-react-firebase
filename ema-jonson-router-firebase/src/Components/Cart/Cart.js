import React from 'react';

const Cart = (props) => {
    const { cart } = props
    // console.log(props)
    // console.log(cart)
    let total = 0
    let shipping = 0
    let quantity = 0
    for (const product of cart) {
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping * product.quantity
        quantity = +quantity + product.quantity
    }

    const tax = (total * 0.1).toFixed(2)

    const gTotal = (+total) + (+shipping) + (+tax)

    return (
        <div className="sm:mx-4 py-8 px-4">
            <h4>Order Sumarry</h4>
            <p>{props.name}</p>
            <p>Selected Items:{quantity}</p>
            <p>Total price:{total}</p><br />
            <p>Total Shipping:{shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand:Total:{gTotal}</h5>
            {props.children}
        </div>
    );
};

export default Cart;