import React from 'react'
import {Outlet, Link} from "react-router-dom"
function Header() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home">Home</Link>
                <Link className="navbar-brand" to="/todo">todo</Link>   
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                

                
            </nav>





        </div>
    )
}

export default Header