import { useEffect, useState } from "react"
import { getStoredCart } from "../../Utilities/FakeDb"

const UseCart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        console.log(storedCart)

        const keys = Object.keys(storedCart)
        const port = 3005
        const urit = `http://localhost:${port}/product-by-keys`
        const path = `productByKeys`
        const uri = `http://localhost`

        const url = `${uri}:${port}/${path}`
        console.log(url)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(keys)
        })

            .then(res => res.json())
            .then(products => {

                console.log(products)

                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id)
                    if (addedProduct) {
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }

                }
                setCart(savedCart);
            })
        // for (const id in storedCart) {
        //     const addedProduct = products.find(product => product._id === id)
        //     if (addedProduct) {
        //         const quantity = storedCart[id]
        //         addedProduct.quantity = quantity;
        //         savedCart.push(addedProduct);
        //     }

        // }
        // setCart(savedCart);

    }, []);
    return [cart, setCart];
}

export default UseCart;