import {React,useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {CountContext} from '../context/CountContext'
//import datas from '../data'

import Card from '../components/Card'
import './Subcategory.css'

const Subcategory = () => {
    
    const [data, setdata] = useState([])
    const navigate = useNavigate()
    const {changeCount} = useContext(CountContext)

    const fetchCartItems = async () =>{
        const res = await axios.get("/cart/getCartItems")      
        console.log("Order Page", res.data)
        setdata(res.data)
    }
    useEffect(() => {
        fetchCartItems()
    }, [])
    

    const placeOrder = async () =>{
        await axios.delete('/cart/deleteCart')
        alert("Your Order has been placed!!")
        changeCount()
        navigate('/')
    }
  
    return (
    <div className='subcategory_container'>
        {data && data.length!==0 ?
        <>
        <div className="subcategory_title">You have ordered:</div>
        {data.map((item, idx)=>{
            return <Card key={idx} item={item} action="Remove" fetchData={fetchCartItems}/>
        })}
        <div className='place_order' style={{marginTop:"8px", marginBottom:"60px"}}>
            <button className="order_btn" onClick={()=>placeOrder()}>Place Order</button>
        </div>
        </>
        :
        <>
        <br />
        <h2>Your Cart is Empty!!</h2>
        </>
    }
    </div>
  )
    

}

export default Subcategory
