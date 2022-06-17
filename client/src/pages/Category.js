import React from 'react'
import {Link} from 'react-router-dom'
import './Category.css'

const Home = () => {
  return (
    <div className="home_container">
        <div className="catergoryIcons">
         <Link to="/category/pizzas" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
            <div className='pizzaIcon'>  
            <img src="https://res.cloudinary.com/rockanroll/image/upload/v1655467375/images/pizza_vkmzor.png"  width="200" height="200" alt="image1" />
              <div className="food_title">Pizza</div>
            </div>
            </Link>
            <Link to="/category/burgers" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
            <div className='burgerIcon'><img src="https://res.cloudinary.com/rockanroll/image/upload/v1655467374/images/burger_wewwlb.png"  width="200" height="200" alt="image" />
            <div className='food_title'>Burger</div>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Home