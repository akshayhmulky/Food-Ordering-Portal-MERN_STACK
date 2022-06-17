import {React,useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
//import datas from '../data'
import axios from "axios"

import Card from '../components/Card'
import './Subcategory.css'

const Subcategory = () => {
    const {name} = useParams()
    
    const [data, setdata] = useState([])

    const fetchSubCategory = async () =>{
        //const whichData = name==='pizzas'?datas.results[0].subItemsData.subItems:datas.results[1].subItemsData.subItems
        const res = await axios.get("/getAllFoods")   
        const whichData = name==='pizzas'?res.data.results[0].subItemsData.subItems:res.data.results[1].subItemsData.subItems 
        console.log(whichData)
        setdata(whichData)
    }

    useEffect(() => {
    fetchSubCategory()
    }, [])
    
    return (
    <div className='subcategory_container'>
        <div className="subcategory_title">Tatsy Pizzas</div>
        {data.map((item, idx)=>{
            return <Card key={idx} item={item} fetchData={fetchSubCategory} action="order_now"/>
        })}
         
    </div>
  )
}

export default Subcategory
