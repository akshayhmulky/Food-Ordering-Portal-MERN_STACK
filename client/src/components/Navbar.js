import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {CountContext} from '../context/CountContext'
import './Navbar.css'


const Navbar = () =>{
   
    const {count} = useContext(CountContext)
    console.log("inside navbar", count)

    return(
        <div className="navbar">
            
        <span className="navbar_logo"><Link to="/" style={{textDecoration:"none", color:"white"}}>Food Ordering Portal</Link></span>
        <ul className="navbar_menu">
          
           <li className='cart_icon'>
           <Link to="/order">
              <svg viewBox="0 0 32 32" fill="white" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 61" id="Layer_61"><path className="cls-1" d="M10,20a1,1,0,0,1-1-.8L6.66,7.41A3,3,0,0,0,3.72,5H2A1,1,0,0,1,2,3H3.72a5,5,0,0,1,4.9,4L11,18.8A1,1,0,0,1,10.2,20Z"/><path className="cls-1" d="M11,27H9.14a4.14,4.14,0,0,1-.38-8.26l18.41-1.67L28.78,9H8A1,1,0,0,1,8,7H30a1,1,0,0,1,.77.37A1,1,0,0,1,31,8.2l-2,10a1,1,0,0,1-.89.8L8.94,20.74A2.13,2.13,0,0,0,9.14,25H11a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M26,30a4,4,0,1,1,4-4A4,4,0,0,1,26,30Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,26,24Z"/><path className="cls-1" d="M14,30a4,4,0,1,1,4-4A4,4,0,0,1,14,30Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,14,24Z"/><path className="cls-1" d="M23,27H17a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/></g></svg>
            </Link>
           </li>
          
           <li className='cart_qty'>{count}</li>
        </ul>
        </div>
    )
}

export default Navbar