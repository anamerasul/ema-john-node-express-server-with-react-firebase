import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utilities/FakeDb';
import Cart from '../Cart/Cart';
import UseProducts from '../Hooks/UseProduct';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import "./Shop.css"
import UseCart from '../Hooks/UseCart';
const Shop = () => {

    // const [products,setProducts]=useState([])
    const [cart, setCart] = UseCart()

    const [pageCount, setPageCount] = useState(0);


    const [page, setPage] = useState(0)

    const [size, setSize] = useState(10)


    const [products, setProducts] = useState([]);




    // console.log(url)

    useEffect(() => {

        const port = 3005
        const urit = `http://localhost:${port}/product`
        const path = `product`
        const uri = `http://localhost`

        const url = `${uri}:${port}/${path}?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

        console.log(url)
    }, [page, size])




    // console.log(url)

    useEffect(() => {
        const port = 3005
        const urit = `http://localhost:${port}/product`
        const path = `product-count`
        const uri = `http://localhost`

        const url = `${uri}:${port}/${path}`
        fetch(url)
            .then(res => res.json())
            .then(data => {

                const count = data.count
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })
    }, [])

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
        const exits = cart.find(product => product._id === sproduct._id)
        console.log(exits)
        if (!exits) {
            sproduct.quantity = 1
            newCart = [...cart, sproduct];
        }

        else {
            const restCart = cart.filter(product => product._id !== sproduct._id)
            exits.quantity = exits.quantity + 1
            newCart = [...restCart, exits]
        }
        // newCart =[...cart,sproduct];

        setCart(newCart)
        addToDb(sproduct._id)
    }

    // useEffect(() => {
    //     const storedCart = getStoredCart()

    //     const savedCart = []

    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product._id === id)
    //         // console.log(addedProduct)

    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity
    //             savedCart.push(addedProduct)
    //         }
    //     }
    //     setCart(savedCart)
    // }, [products])

    return (
        <div className="  grid lg:grid-cols-[4fr,1fr] sm:grid-cols-[3fr,1fr] grid-cols-[1fr,1fr]">
            {/* <h2>This is shop</h2> */}

            <div className="sm:mx-[100px] sm:my-[50px] sm:ml-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[45px]
            sm:gap-[9rem]">
                {/* <h3>This is for product:{products.length}</h3> */}

                {
                    products.map(product => <Product
                        key={product._id}
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

            <div className="mr-15 ml-20 my-10 pagination">
                {
                    [...Array(pageCount).keys()].map(number => <button

                        key={number}
                        onClick={() => setPage(number)}

                        className={page === number ?
                            'selected rounded-none px-4 py-2' :
                            'rounded-none px-4 py-2 mx-4  bg-orange-100'
                        }


                    >{number + 1}</button>)
                }
                {/* {page}
                {
                    size
                } */}
                <select onChange={e => setSize(e.target.value)} name="" id="">

                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

            </div>
        </div>
    );
};

export default Shop;