import axios from 'axios'
import React, {useContext} from 'react'
import {CountContext} from '../context/CountContext'
import './Card.css'

const Card = ({item, action, fetchData}) => {

  const {changeCount} = useContext(CountContext)
   
  const addToCart = async () =>{
    
    const itemdata ={
      name: item.name,
      image:item.image,
      price :item.price,
      description:item.description
  }
    await axios.post("/cart/add", itemdata)
    fetchData() //refresh the cart
    changeCount()
  }


  const removeFromCart = async () =>{
    const id = item._id
    await axios.delete("/cart/deleteCartItem",{data:{_id:id}})
    fetchData() //refresh the cart
    changeCount()
  }

  return (
    <div className='card_container'>
    <div className="card">
        <div className='left'>
            <div className='cardtitle'>{item.name}</div>
            <div className="price">	₹ {item.price}</div>
            <p className="description">{item.description}</p>
            {/* add or remove logic goes below */}
            {
             (action==="order_now")?
             <button className='order_btn' onClick={()=>addToCart()}>Order Now</button>:
             <button className='order_btn' onClick={()=>removeFromCart()}>Remove</button>
            }
        </div>
         <div className='right'><img src={item.image} alt="" width="160" height="100"/></div>
    </div>
    </div>
  )
}

export default Card