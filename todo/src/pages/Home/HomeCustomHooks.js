import React,{useState, useEffect} from 'react'
function HomeCustomHooks() {
    const [products , setproducts]=useState()
      const  fetchProducts=async ()=>{
            const productsFetchIng=await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

            const products=await (productsFetchIng.json());
            

            setproducts(products)
            // .then(res=>res.json())
            // .then(json=>console.log(json))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    [products]
  )
}

export default HomeCustomHooks