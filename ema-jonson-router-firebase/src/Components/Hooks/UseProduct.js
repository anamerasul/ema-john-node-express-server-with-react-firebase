import { useEffect, useState } from "react"

const UseProducts = () => {
    const [products, setProducts] = useState([]);


    const port = 3005
    const urit = `http://localhost:${port}/product`
    const path = `product`
    const uri = `http://localhost`

    const url = `${uri}:${port}/${path}`

    // console.log(url)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]

}

export default UseProducts;