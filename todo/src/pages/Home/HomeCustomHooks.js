import React,{useState, useEffect} from 'react'
function HomeCustomHooks() {
    const [products , setproducts]=useState()
      const  fetchProducts=async ()=>{
            const productsFetchIng=await fetch('https://fakestoreapi.com/products')
        
            const products=await (productsFetchIng.json());
            setproducts(products)
           
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    [products]
  )
}

export default HomeCustomHooks