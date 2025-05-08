import { useEffect, useState } from "react"
import type { ProductsDetail } from "../types/products.type"
import { useNavigate, useParams } from "react-router-dom"
import { PulseLoader } from "react-spinners"

const ProductDetail = () => {
  const [product, setProduct] = useState<ProductsDetail|null>(null)
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    setProduct(null)
    const getProductId = async ()=>{
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      console.log('detail', data)
      setProduct(data)
    }
    getProductId()
  },[id])

  const handleBack =() =>{
    navigate('/products')
  }

  if(!product) return <PulseLoader/>

  return (
    <div style={{margin:"1rem"}}>
        <h2>ID: {product.id}</h2>
        <h2>Title: {product.title}</h2>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        <button onClick={handleBack}>Back to List</button>
    </div>
  )
}

export default ProductDetail