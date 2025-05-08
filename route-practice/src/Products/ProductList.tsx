import { useState, useEffect } from "react"
import type { Product } from "../types/products.type"
import { Link } from "react-router-dom"

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect( () => {
        const getProducts = async ()=>{
            const res = await fetch(`https://dummyjson.com/products`)
            const data = await res.json()
            console.log(data)
            setProducts(data.products)

        }
        getProducts()
        
    },[])

  return (
    <div>
        <h1>Product List</h1>
        <ul>
            {products.map( pro => (
                <li key={pro.id}>
                    <span>{pro.id} : {pro.title}</span>
                    <Link to={`/products/${pro.id}`}>View Detail</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductList