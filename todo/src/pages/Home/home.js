import React from 'react'
import HomeCustomHooks from './HomeCustomHooks'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Outlet, Link } from "react-router-dom"
function Home(params) {
    const [products] = HomeCustomHooks()
   
    return (
        <div className='container'>
            <div>
                {products.map((item)=>{
                    console.log(item.title);
                })}
            </div>
        </div>
    )
}

{/* <img className="card-img-top" src={produstItems.image} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{produstItems.title}</h5>
                                    <p className="card-text">{produstItems.description</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a> */}

export default Home