import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utilities/FakeDb';
import Cart from '../Cart/Cart';
import UseProducts from '../Hooks/UseProduct';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import "./Shop.css"
const Shop = () => {

    // const [products,setProducts]=useState([])
    const [products] = UseProducts([])
    const [cart, setCart] = useState([])
    // console.log(cart)
    // useEffect(()=>{
    //     console.log('before fetch')
    //     fetch('products.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setProducts(data)
    //     console.log('after fetch load')
    //     })

    // },[])

    const handleAddtoCart = (sproduct) => {
        // console.log(sproduct)
        let newCart = []
        // cart.push(product)
        const exits = cart.find(product => product.id === sproduct.id)
        if (!exits) {
            sproduct.quantity = 1
            newCart = [...cart, sproduct];
        }

        else {
            const restCart = cart.filter(product => product.id !== sproduct.id)
            exits.quantity = exits.quantity + 1
            newCart = [...restCart, exits]
        }
        // newCart =[...cart,sproduct];

        setCart(newCart)
        addToDb(sproduct.id)
    }

    useEffect(() => {
        const storedCart = getStoredCart()

        const savedCart = []

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct)

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    return (
        <div className="  grid lg:grid-cols-[4fr,1fr] sm:grid-cols-[3fr,1fr] grid-cols-[1fr,1fr]">
            {/* <h2>This is shop</h2> */}

            <div className="sm:mx-[100px] sm:my-[50px] sm:ml-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[45px]
            sm:gap-[9rem]">
                {/* <h3>This is for product:{products.length}</h3> */}

                {
                    products.map(product => <Product
                        key={product.id}
                        handleAddtoCart={handleAddtoCart}
                        product={product}
                    ></Product>)

                }
            </div>
            <div className="cart-container sticky top-0 h-[900px] ml-auto bg-orange-300 w-full ">

                <Cart cart={cart}>
                    <Link className='bg-slate-300' to='/order'>
                        <button>Rewiew order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;