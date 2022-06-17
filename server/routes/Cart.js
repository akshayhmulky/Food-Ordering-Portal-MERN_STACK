const router = require('express').Router()

//import model
const Cart = require('../model/Cart')

//Get all Groceries
router.get('/getAllFoods', (req,res)=>{
    const results = [
    {
        "name": "Pizza",
        "image": "https://res.cloudinary.com/rockanroll/image/upload/v1655467375/images/pizza_vkmzor.png",
        "subItemsData": {
        "name": "Tasty Pizzas",
        "subItems": [
        {
        "name": "Tomato Basil Italian Pizza",
        "image": "https://res.cloudinary.com/rockanroll/image/upload/v1655467234/images/Tomato_Basil_Italian_Pizza_hkhl6d.jpg",
        "price": "450",
        "description": "Dressed with oil, the origanum and garlic cloves"
        },
        {
        "name": "Bombay Pizza",
        "image": "https://res.cloudinary.com/rockanroll/image/upload/v1655467235/images/Bombay_Pizza_tu0pvu.png",
        "price": "550",
        "description": "Spicy tomato sauce with Italian herbs, mushrooms,onion, cottage cheese, coriander and mozzarella"
            },
        {
        "name": "Sicilia Pizza",
        "image": "https://res.cloudinary.com/rockanroll/image/upload/v1655467234/images/Sicilia_Pizza_gejdna.jpg",
        "price": "450",
        "description": "A thick base pizza with fresh tomato sauce,mushrooms, garlic, pickled onions"
        }
        ]
        }
    },
    {
    "name": "Burger",
    "image": "https://res.cloudinary.com/rockanroll/image/upload/v1655467374/images/burger_wewwlb.png",
    "subItemsData": {
    "name": "Crispy Burgers",
    "subItems": [
        {
        "name": "Fried Chicken Burger",
        "image": "https://res.cloudinary.com/rockanroll/image/upload/v1655467763/images/Fried_Chicken_Burger_bj69yt.jpg",
        "price": "450",
        "description": "Old School Chicken Burger"
        },
        {
        "name": "Paneer Tikka Burger",
        "image": "https://res.cloudinary.com/rockanroll/image/upload/v1655467763/images/Paneer_Tikka_Burger_rcplmc.jpg",
        "price": "450",
        "description": "Spicy Paneer, Onion, Tomato, Mozerella Cheese"
        },
        {
        "name": "Chicken Classic Cheese Burger",
        "image": "https://res.cloudinary.com/rockanroll/image/upload/v1655467763/images/Chicken_Classic_Cheese_Burger_ez6pd5.jpg",
        "price": "550",
        "description": "Aged cheddar, sweet pickle, tomato, red onion"
        }
        ]
        }
    }
    ]
    res.json({'results': results})
})

//Get all CartItems
router.get('/cart/getCartItems', async (req, res)=>{
    try {
        //Remove createdAt, updateAt and __v  from json ouput
        const getCartItems = await Cart.find().select(["-createdAt", "-updatedAt","-__v"]).lean()
        res.json(getCartItems)
        
    } catch (error) {
        console.log(error)
        res.json({'error':'something went wrong'})  
    }

})


//Add CartItem
router.post('/cart/add', async (req,res)=>{
    try {
        const data = req.body
        console.log("add", req.body)
        const cart = new Cart(data)
        await cart.save()
        res.json({"result":"Item added to the Cart"})
        
    } catch (error) {
        console.log(error)
        res.json({'error':'something went wrong'})  
    }

})

router.get('/cart/cartCount', async (req,res)=>{
    const getCount = await Cart.countDocuments({});
    res.json({
        "count": getCount
    })
    
})


//Delete Cart Item
router.delete('/cart/deleteCartItem', async(req, res)=>{
    const id = req.body._id
    console.log(req.body)
    try {
        const getCartItem = await Cart.findById(id)
        await getCartItem.remove()
        res.json({
            'result':'Cart Item Deleted'
        })
    } catch (error) {
        console.log(error)
        res.json({'error':'something went wrong'})    
    }
})

//Delete Cart
router.delete('/cart/deleteCart', async(req, res)=>{
    try {
        await Cart.deleteMany({})
        res.json({
            'result':'Cart deleted'
        })
    } catch (error) {
        console.log(error)
        res.json({'error':'something went wrong'})    
    }
})

module.exports = router //Important